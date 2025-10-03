import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderMain.css"
export default function HeaderMain() {
  return (
    <div className='headerRow-class'>
        <Link className='LinkBtnActive-class' to={`/`}>
            <p>Головна</p>
        </Link>
        <Link className='LinkBtnDisable-class' to={`/`}>
            <p>Головна</p>
        </Link>
    </div>
  )
}
