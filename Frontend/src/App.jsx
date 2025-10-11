import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout'
import Login from './component/Login'

import StartPage from './component/StartPage'
import HomeWorkForm from './component/HomeWorkForm'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/AddHome' element={<HomeWorkForm/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Layout/>}>
              <Route index element={<StartPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
