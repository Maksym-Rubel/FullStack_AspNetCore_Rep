import { React, use, useContext, useEffect, useState } from 'react'
import "./Login.css"
import DotsBackGround from './DotsBackGround';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { accountService } from '../services/account.service';
import { CounterContext } from '../context/currenthome';

export default function Login() {
  const [IsLogin, setIsLogin] = useState(true);
  const [EmailValue, setEmailValue] = useState("");
  const [PassValue, setPassValue] = useState("");
  const { Email, setEmail } = useContext(CounterContext);

  useEffect(() => { console.log("top" ,EmailValue) }, [EmailValue]);
  useEffect(() => { console.log("top" ,PassValue) }, [PassValue]);
  const navigate = useNavigate();



  function onFinish() {

    var user = {
      email: EmailValue,
      password: PassValue
    }

    axios.post("http://192.168.1.121:5212/api/Account/login", user).then(res => {
      if (res.status === 200) {
        accountService.login(res.data.accesessToken,res.data.refreshToken,res.data.role);

        navigate("/main");

      }
    }).catch(err => {
      console.log("Login error", err);
    })

  };



  return (
    <>
      <div className='MobileGradient'>
        <div className='BallViolet'></div>
        <div className='BallRed'></div>

      </div>
      <div className='FirstDivDesign'>

        <div className='LoginDivMenu'>
          <div className='LoginItemsBack'>

            <div className='ImgBack'></div>
            <div className='FontMain'><p>Ласкаво просимо!</p></div>
            <div className='FontSecond'><p>Відчуйте новий досвід із щоденником.</p></div>
            <label className='Label-class1'>
              Пошта
              <input value={EmailValue} onChange={(e) => setEmailValue(e.target.value)} type='text' placeholder='yourmail@mail.com'></input>
            </label>
            <label className='Label-class1'>
              Пароль
              <input value={PassValue}
                onChange={(e) => setPassValue(e.target.value)} type='password' placeholder='••••••••••••'></input>
            </label>

            <div className='forgotPass-class'><p>Забули пароль?</p></div>

            <button onClick={() => onFinish()} className='LoginBtn-class1'>Увійти</button>

            <div className='Regist-class'><p>Немає акаунта? <Link className='Link-class' to="/Register"><span>Зареєструватися</span></Link></p></div>






          </div>
        </div>
        <div className='LoginImage'>
          <div className='ImageBack2323'></div>
        </div>

      </div>
    </>

  )
}
