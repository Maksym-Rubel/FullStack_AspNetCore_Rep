import React, { useContext, useEffect, useState } from 'react'
import "./StartPage.css"
import OneSubject from './OneSubject'
import { Link } from 'react-router-dom';
import { CounterContext } from '../context/currenthome.jsx';
import axios from 'axios';
import { returnUserclass } from '../services/returnUser.servicse.js';
import { accountService } from '../services/account.service.js';
import { userRole } from '../services/userRole.service.js';

export default function StartPage() {
  const [ResObj, SetRes] = useState([]);
  const [ResObjCont, SetResCont] = useState([]);

  const [ObjName, SetObjName] = useState([]);
  const { datetimeValue, setdatetimeValue } = useContext(CounterContext);
  const { Email, setEmail } = useContext(CounterContext);
  useEffect(() => { GetItems() }, [Email])

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
      SetRes(res.filter(m => m.isControlWork == false));
      SetResCont(res.filter(m => m.isControlWork == true));

    }
  }
  async function GetItem() {

    console.log("Token:", localStorage.getItem("token"));





    axios.get("http://192.168.1.121:5212/api/Items/GetAllItem", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`

      }
    }).then((res) => {

      SetObjName(res.data);


    }).catch((error) => {
      if (error.response == 403) {

        const refreshed = returnUserclass.returnUser();

        if (refreshed) {
          return GetItem();

        }

      }
      else {
        console.log("Get Item Fail")
      }

    }
    );



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
          {/* <p></p> */}
          {/* <p>{Email.length <= 3 ? "pusto " : Email}</p> */}
        </div>

      </div>
      <div className='OsnovnaInfo-class'>
        <div className='HomeWork-class'>
          <div className='HomeWorkDiv-class'>
            <p>Домашні завдання</p>
            {userRole.get() == "admin" ?

              <Link className='LinkBtnLink' to="/AddHome">

                <p>+</p>

              </Link> : ""}
          </div>
          {
            ResObj?.length > 0 ? ResObj?.map((item) => (
              <OneSubject Id={item.id} key={item.id} Title={`${GetItemName(item.itemId)}`} ItemId={item.itemId} Description={item.decription} />

            ))
              //
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
          {
            ResObjCont?.length > 0 ? ResObjCont?.map((item) => (
              <OneSubject Id={item.id} key={item.id} Title={`${GetItemName(item.itemId)}`} ItemId={item.itemId} Description={item.decription} />

            ))
              //
              :
              <div className='HomeworkNull'>
                <p>контрольних немає</p>
              </div>
          }
        </div>

      </div>
    </div>

  )
}
