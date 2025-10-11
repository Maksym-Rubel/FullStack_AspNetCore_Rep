import React, { useState } from 'react'
import "./HomeWorkForm.css"
import { useEffect } from 'react';
import dayjs from 'dayjs';
export default function HomeWorkForm() {

  const [ItemId, SetItemId] = useState(1);
  const [Desc, SetDesc] = useState("");
  const [Dates, SetDates] = useState('');
  const [ResObj, SetRes] = useState([]);




  async function GetItems() {
    var data = await fetch("http://192.168.1.121:5212/api/Items/GetAllItem");
    var res = await data.json();

    SetRes(res);
  }
  useEffect(() => {
    console.log(ItemId);
  }, [ItemId])
  useEffect(() => {
    GetItems();
  }, [])
  async function CreateHome() {
    var homework = {
      itemId: ItemId,
      decription: Desc,
      homeWorkDate: Dates
    }
    await fetch(`http://192.168.1.121:5212/api/Homework/CreateHomeWork`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(homework)
      });
    // var response = await data.json();
    // return response;
  }

  return (
    <div className='FormBackground'>
      <label>
        Id предмета
        {/* <input className='numberInput' value={ItemId} onChange={(e) =>
          SetItemId(e.target.value)} type='number' min={0} max={20} maxLength="2" placeholder='параграф...'></input> */}
        <select className='Select-class' onChange={(e) => SetItemId(e.target.value)} name="languages" id="lang">
          {
            ResObj?.map((item) => (
              <option value={item.id} key={item.id} >{item.name}</option>
            ))
          }
        </select>

      </label>

      <label>
        Опис домашнього
        <input type='text' value={Desc} onChange={(e) =>
          SetDesc(e.target.value)} placeholder='параграф...'></input>

      </label><label>
        Дату дз
        <input className='DateInpt' value={Dates} onChange={(e) =>
          SetDates(e.target.value)} type='date' placeholder='дата...'></input>
      </label>

      <input className='CreateBtn' onClick={() => CreateHome()} type="button" value={"Створити"} />
    </div>
  )
}
