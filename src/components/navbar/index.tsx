import React from 'react'
import Logo from './logo.svg'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} className="logo" alt="logo" />
        </nav>
    )
}