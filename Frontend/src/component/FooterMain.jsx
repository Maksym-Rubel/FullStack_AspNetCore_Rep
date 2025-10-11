import React from 'react'
import "./FooterMain.css"
export default function FooterMain() {
  return (
    <div className='FooterMain'>
      <div className='InformationDiv-class'>
        <h3>©Рубель Максим</h3>
        <p>Сайт для навчання та виконання домашніх завдань.  </p>
        <p id='BolderP'>Скарги та побажання:
           </p>
           <p>Надсилайте ваші відгуки, пропозиції або знайдені помилки на email: rubelmaksum2404@gmail.com</p>

      </div>
      <div className='ImageTab-class'>
        <img src='./public/imgs/footerSpline.png'></img>
      </div>
    </div>
  )
}
