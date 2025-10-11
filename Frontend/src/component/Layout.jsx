import React from 'react'
import "./Layout.css"


import { Outlet } from 'react-router-dom'
import HeaderMain from './headerMain'
import FooterMain from './FooterMain'
import SideBar from './SideBar'

export default function Layout() {
    return (
        <>
            <div className='GridLayout-class'>
                <header className='header-class'>
                    <HeaderMain></HeaderMain>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
                <aside>
                    <SideBar></SideBar>
                </aside>
                <footer>
                    <FooterMain></FooterMain>
                </footer>
            </div>

        </>
    )
}
