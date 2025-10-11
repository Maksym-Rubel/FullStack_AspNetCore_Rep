import React, { useContext, useEffect, useState } from 'react'
import "./StartPage.css"
import OneSubject from './OneSubject'
import { Link } from 'react-router-dom';
import { CounterContext } from '../context/currenthome.jsx';

export default function StartPage() {
  const [ResObj, SetRes] = useState([]);
  const [ObjName, SetObjName] = useState([]);
  const { datetimeValue, setdatetimeValue } = useContext(CounterContext);


  // function getDate() {
  //   let DateTop = new Date();
  //   let getDay = DateTop.getDate()
  //   let getMonth = DateTop.getMonth();
  //   return getDay + "." + ((getMonth + 1) < 10 ? "0" + (getMonth + 1) : (getMonth + 1));
  // }
  async function GetItems() {
    var data = await fetch(`http://192.168.1.121:5212/api/Homework/GeHomeWorkItems?dateTime=${datetimeValue.format("YYYY-MM-DD")}`);
    var res = await data.json();
    if (res != null) {
      SetRes(res);

    }
  }
  async function GetItem() {
    var data = await fetch("http://192.168.1.121:5212/api/Items/GetAllItem");
    var res = await data.json();
    SetObjName(res)

  }
  function GetItemName(ItemId) {
    if (ItemId == null) {
      console.log("Null")
    }
    var arr = [...ObjName];
    var modelarr = arr.filter(m => m.id == ItemId)[0];

    return modelarr?.name
    // console.log(modelarr.name)
  }
  useEffect(() => {
    console.log(datetimeValue.format("YYYY-MM-DD"))
    GetItems();
    GetItem();
  }, [datetimeValue])
  // useEffect(() => {
  //   GetItemName(1)
  // }, [ObjName])
  return (
    <div className='StartPage-class'>
      <div className='Option-class'>
        <div className='Fift-classNext'>
          <img src='./public/imgs/TungTungSahur.png'></img>

        </div>
        <div className='Fift-class'>
          <h1>Домашнє завдання</h1>
          <p></p>
        </div>

      </div>
      <div className='OsnovnaInfo-class'>
        <div className='HomeWork-class'>
          <div className='HomeWorkDiv-class'>
            <p>Домашні завдання</p>
            <Link to="/AddHome">
              <div className='LinkBtn'>
                {/* + */}
              </div>
            </Link>
          </div>
          {
            ResObj?.length > 0 ? ResObj?.map((item) => (
              <OneSubject Id={item.Id} key={item.id} Title={`${GetItemName(item.itemId)}`} ItemId={item.itemId} Description={item.decription} />

            ))
              :
              <div className='HomeworkNull'>
                <p>домашнього немає</p>
              </div>
          }
          {/* <OneSubject Id={2} Title={"Математика"} Description={"виконати тести"} />
          <OneSubject Id={3} Title={"Буд. Конструкції"} Description={"відпочити"} /> */}
        </div>
        <div className='HomeWork-class'>
          <p>Контрольні роботи</p>
          <OneSubject Id={1} Title={"Математика"} Description={"самостійна робота"} />
          <OneSubject Id={2} Title={"Хімія"} Description={"параграф 14-21 самостійна робота"} />
        </div>

      </div>
    </div>

  )
}
