import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'
import Login from './component/Login'

import StartPage from './component/StartPage'
import HomeWorkForm from './component/HomeWorkForm'
import axios from 'axios'
import Register from './component/Register'
import { tokenService } from './services/token.service'
import { accountService } from './services/account.service'
import Notfound from './component/Notfound'
import { refreshService } from './services/refreshToken.service'

function App() {


  console.log(accountService.isAuthenticated());


  


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/AddHome' element={accountService.isAuthenticated() ? <HomeWorkForm /> : <Notfound />} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/main" element={<Layout /> }>
            <Route index element={<StartPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
