import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useLogin } from '../contexts/session.context'

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const login = useLogin()
  
  const handleLogin = () => {
    console.log(email, pass);
    login(usuario.token, usuario)    
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