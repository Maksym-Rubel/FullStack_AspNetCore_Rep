import { React, useState } from 'react'
import "./Login.css"
import DotsBackGround from './DotsBackGround';

export default function Login() {
  const [IsLogin, setIsLogin] = useState(true);

  function PerevIsLoginTrue() {

    if (IsLogin == true) {
      setIsLogin(false)

    }

  }
  function PerevIsLoginFalse() {

    if (IsLogin == false) {
      setIsLogin(true)

    }

  }


  return (
    <>
      <DotsBackGround></DotsBackGround>
      <div className='Login-class'>
        {/* <img id='FirstBlobPosId' src='public\imgs\bloob1svg.svg' />
        <img id='SecondBlobPosId' src='public\imgs\bloob2.svg' />
        <img id='ThirdBlobPosId' src='public\imgs\image.svg' />
        <img id='FourBlobPosId' src='public\imgs\bloob2.svg' /> */}
        <h2 className='Text-class'>Увійти в аккаунт</h2>
        {/* <div className='Button-class'>
          <button onClick={() => PerevIsLoginFalse()} className='TextLogin-classLeft'><p>Увійти</p></button>
          <button onClick={() => PerevIsLoginTrue()} className='TextLogin-classRight'><p>Реєстрація</p></button>


          <div className='InlinePading-div-class'>  <div className={IsLogin ? 'PurpleBtnLeft' : 'PurpleBtnRight'}></div>  </div>
        </div> */}

        <label className='Label-class'>
          Пошта
          <input type='text' placeholder='yourmail@mail.com'></input>
        </label>
        <label className='Label-class'>
          Пароль
          <input type='password' placeholder='ваш пароль'></input>
        </label>

        <button className='LoginBtn-class'>Увійти</button>
      </div>
    </>

  )
}
