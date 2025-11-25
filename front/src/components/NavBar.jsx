import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-white shadow-sm h-16'>
        <ul className='flex'>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/proyectos">Proyectos</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar