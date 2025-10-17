import React, { useState } from 'react'
import "./HomeWorkForm.css"
import { useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import AxiosInstance from '../Interceptors';
import { tokenService } from '../services/token.service';
export default function HomeWorkForm() {

  const [ItemId, SetItemId] = useState(1);
  const [Desc, SetDesc] = useState("");
  const [Dates, SetDates] = useState('');
  const [ResObj, SetRes] = useState([]);
  const [IsControl, SetIsControl] = useState(false);




  async function GetItems() {
    axios.get("http://192.168.1.121:5212/api/Items/GetAllItem", {
      headers: {
        Authorization: `Bearer ${tokenService.get()}`

      }
    }).then((res) => SetRes(res.data))
  }


  useEffect(() => {
    console.log(ResObj);
  }, [ResObj])
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
      homeWorkDate: Dates,
      IsControlWork: IsControl
    }
    try {
      axios.post("http://192.168.1.121:5212/api/Homework/CreateHomeWork", homework, {
        headers: {
          Authorization: `Bearer ${tokenService.get()}`

        }
      }).then((res) => console.log(res.status))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='FormBackground'>
      <label>
        Id предмета
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
      </label>
      <label>
        Дату дз
        <input className='DateInpt' value={Dates} onChange={(e) =>
          SetDates(e.target.value)} type='date' placeholder='дата...'></input>
      </label>
      <label>
        Це контрольна?
        <div className='CheckboxInp'>
          <input className='Checkbox' value={IsControl} onChange={() => SetIsControl(prev => !prev)} type='checkbox'></input>
        </div>
      </label>
      <input className='CreateBtn' onClick={() => CreateHome()} type="button" value={"Створити"} />
    </div>
  )
}
