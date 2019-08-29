import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './logo.svg'
import './navbar.css'


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={Logo} className="logo" alt="logo" />
            </Link>
            <nav>
                <Link to="/docs">Docs</Link>
            </nav>
        </div>
    )
}

export default Navbar