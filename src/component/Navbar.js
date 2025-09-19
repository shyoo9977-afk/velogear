//./compont/Navbar.js
import React from 'react'
import logoImg from '../assets/logo1.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h1 className="logo">
            <Link to="/" >
                <img src={logoImg} alt="logo" /> <span>VeloGear</span><span> Finder</span>
            </Link>
        </h1>

        <nav className="gnb">
            <NavLink to="/" end>HOME</NavLink>
            <NavLink to="/category">CATEGORY</NavLink>
            <NavLink to="/tips">TIPS</NavLink>            
            <NavLink to="/about">ABOUT</NavLink>
        </nav>
    </header>
  )
}

export default Navbar