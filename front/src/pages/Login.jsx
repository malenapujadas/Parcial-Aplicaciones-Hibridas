import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleLogin = () => {
    console.log(email, pass);
    localStorage.setItem("session", JSON.stringify({email, pass}))
    navigate("/")
  } 

  return (
    <div>
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder='Ingresa tu email'
        />
      <input 
        onChange={(e) => setPass(e.target.value)} 
        type="password" 
        placeholder='Ingresa tu contraseña'
        />
      <button onClick={handleLogin} type="submit">Ingresar</button>
    </div>
  )
}

export default Login