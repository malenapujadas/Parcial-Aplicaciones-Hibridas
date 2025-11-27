import React, { useState } from 'react'
import { useLogin } from '../contexts/session.context'

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState(null)

  const login = useLogin()

  const handleLogin = async () => {
    setError(null)
    if (!email || !pass) {
      setError('Debe completar email y contraseña')
      return
    }

    try {
      const res = await fetch('http://localhost:3333/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
      })

      const data = await res.json()

      if (!res.ok) {
        // data may contain message and errors (array de mensajes de yup)
        if (data && data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          setError(data.errors.join(' - '))
        } else {
          setError(data.message || 'Error en el login')
        }
        return
      }

      // data expected: { _id, email, age, token }
      const usuario = { _id: data._id, email: data.email, age: data.age }
      login(data.token, usuario)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder='Ingresa tu email'
      />
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder='Ingresa tu contraseña'
      />
      <button onClick={handleLogin} type="button">Ingresar</button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </div>
  )
}

export default Login