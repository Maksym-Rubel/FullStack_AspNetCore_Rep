import React, { useState } from 'react'

import "./Register.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
    const [EmailValue, setEmailValue] = useState("");
    const [PassValue, setPassValue] = useState("");
    const [PassValueDef, setPassValueDef] = useState("");

    const [RegistExeption, setRegistExeption] = useState("");


    const navigate = useNavigate();
    async function register() {
        if (PassValue == PassValueDef) {
            let user =
            {
                email: EmailValue,
                password: PassValue

            }
            try {
                const res = await axios.post("http://192.168.1.121:5212/api/Account/register", user)
                if (res.status == 200) {
                    navigate("/")
                }
                else {
                    console.log("res =>", res)
                }
            } catch (error) {
                setRegistExeption(error.response.data.detail)
            }





        }
        else {
            setRegistExeption("Passwords must match")

        }


    }


    return (
        <>
            <div className='MobileGradient'>
                <div className='BallViolet'></div>
                <div className='BallRed'></div>

            </div>
            <div className='FirstDivDesign'>

                <div className='LoginDivMenu1'>
                    <div className='LoginItemsBack1'>

                        <div className='ImgBack'></div>
                        <div className='FontMain'><p>Почніть нову сторінку!</p></div>
                        <div className='FontSecond'><p>Реєстрація — це перший крок до вашого щоденника.</p></div>
                        <label className='Label-class1'><p className='TextExeption'>{RegistExeption}</p></label>
                        <label className='Label-class1'>
                            Пошта
                            <input value={EmailValue} onChange={(e) => setEmailValue(e.target.value)} type='text' placeholder='yourmail@mail.com'></input>
                        </label>
                        <label className='Label-class1'>
                            Пароль
                            <input value={PassValue}
                                onChange={(e) => setPassValue(e.target.value)} type='password' placeholder='••••••••••••'></input>
                        </label>
                        <label className='Label-class1'>
                            Повтори Пароль
                            <input value={PassValueDef}
                                onChange={(e) => setPassValueDef(e.target.value)} type='password' placeholder='••••••••••••'></input>
                        </label>

                        {/* <div className='forgotPass-class'><p>Забули пароль?</p></div> */}

                        <button onClick={() => register()} className='LoginBtn-class1'>Зареєструватися</button>

                        <div className='Regist-class'><p>Уже маєш акаунт? <Link to="/" className="Link-class"><span>Увійти</span></Link></p></div>






                    </div>
                </div>
                <div className='LoginImage'>
                    <div className='ImageBack2323'></div>
                </div>

            </div>
        </>
    )
}
