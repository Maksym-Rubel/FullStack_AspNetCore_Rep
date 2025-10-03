import React from 'react'
import "./StartPage.css"
import OneSubject from './OneSubject'
export default function StartPage() {
  function getDate() {
    let DateTop = new Date();
    let getDay = DateTop.getDate()
    let getMonth = DateTop.getMonth();
    return getDay + "." + ((getMonth + 1) < 10 ? "0" + (getMonth + 1) : (getMonth + 1));
  }

  return (
    <div className='StartPage-class'>
      <div className='Option-class'>
        <div className='Fift-classNext'>
          <img src='./public/imgs/TungTungSahur.png'></img>

        </div>
        <div className='Fift-class'>
          <h1>Домашнє завдання</h1>
          <p>Від Рубля</p>
        </div>

      </div>
      <div className='OsnovnaInfo-class'>
        <div className='HomeWork-class'>
          <p>Домашні завдання</p>
          <OneSubject Id={1} Title={"Фізика"} Description={"параграф 61"} />
          <OneSubject Id={2} Title={"Математика"} Description={"виконати тести"} />
          <OneSubject Id={3} Title={"Буд. Конструкції"} Description={"відпочити"} />
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
