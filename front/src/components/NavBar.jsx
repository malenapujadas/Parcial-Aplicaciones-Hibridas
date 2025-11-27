import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav style={{ background: '#111', color: '#fff', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', boxSizing: 'border-box' }}>
      <div style={{ fontWeight: 700, fontSize: '1.6rem', letterSpacing: 1 }}>JULIETA Y MALENA</div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><NavLink to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Inicio</NavLink></li>
        <li><NavLink to="/proyectos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Proyectos</NavLink></li>
        <li><NavLink to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Login</NavLink></li>
        <li><NavLink to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Registro</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar