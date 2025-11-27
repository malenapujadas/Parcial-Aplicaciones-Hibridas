import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const [age, setAge] = useState(18)
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const handleRegister = async () => {
    setErrors(null)
    try {
      const res = await fetch('http://localhost:3333/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password: pass, passwordConfirm: passConfirm, age })
      })

      const data = await res.json()

      if (!res.ok) {
        if (data && data.errors && Array.isArray(data.errors)) {
          setErrors(data.errors)
        } else if (data && data.message) {
          setErrors([data.message])
        } else {
          setErrors(['Error al registrar usuario'])
        }
        return
      }

      // Registro exitoso, redirigir al login
      navigate('/login')
    } catch (e) {
      setErrors([e.message])
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <div className="space-y-3 max-w-md">
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Usuario" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo electrónico" type="email" />
        <input value={pass} onChange={e => setPass(e.target.value)} placeholder="Contraseña" type="password" />
        <input value={passConfirm} onChange={e => setPassConfirm(e.target.value)} placeholder="Confirmar contraseña" type="password" />
        <input value={age} onChange={e => setAge(Number(e.target.value))} placeholder="Edad" type="number" min={1} />
        <button onClick={handleRegister} type="button">Registrarse</button>
        {errors && (
          <div style={{ color: 'red' }}>
            {errors.map((err, i) => <div key={i}>{err}</div>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Register
