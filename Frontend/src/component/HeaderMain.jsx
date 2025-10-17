import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./HeaderMain.css"
import { CounterContext } from '../context/currenthome'
import axios from 'axios';
import { accountService } from '../services/account.service';
import { tokenService } from '../services/token.service';
export default function HeaderMain() {
  const { Email, setEmail } = useContext(CounterContext);
  // function LogoutFrom() {
  //   axios.post("http://192.168.1.121:5212/api/Account/logout").then(res => {
  //     if (res.status === 200) {
  //         accountService.logout();
  //     }
  //   })



  const navigate = useNavigate();

  function LogoutFrom() {


    axios.post("http://192.168.1.121:5212/api/Account/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenService.get()}`
      }
    }).then(res => {
      if (res.status === 200) {


        accountService.logout(res.data.accesessToken);

        navigate("/");

      }
    }).catch(err => {
      console.log("Login error", err);
    })

  };

  return (
    <div className='headerRow-class'>
      <Link className='LinkBtnActive-class' to={`/`}>
        <p>Головна</p>
      </Link>
      {/* <Link className='LinkBtnDisable-class' to={`/`}>
        <p>{Email ?? "dsad"}</p>
      </Link> */}
      {/* <Link className='LinkBtnDisable-class' to={`/`}>
        <p>Вийти</p>

      </Link> */}
      <button className="LinkBtnDisable-class" onClick={() => LogoutFrom()}><p>Вийти</p></button>
     
    </div>
  )
}
