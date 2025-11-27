import { createContext, useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'

const SessionContext = createContext() //creo contexto

function useSession(){
    return useContext(SessionContext)
}

function useUsuario(){
    const {usuario} = useSession() 
    return usuario
}

function useToken(){
    const {token} = useSession()
    return token
}

function useLogin(){
    const {onLogin} = useSession()
    return onLogin
}

export function SessionProvider({children}){
    const [usuario, setUsuario] = useState(null)
    const [token, setToken ] = useState(localStorage.getItem("token"))

    const navigate = useNavigate()

    const onLogin = (jwt, usuario) => {
        localStorage.setItem(token)
        localStorage.setItem("usuario", usuario)
        setToken(jwt)
        setUsuario(usuario)
        navigate("/")
    }
    return (
        <SessionContext.Provider value={{usuario, setUsuario, token, setToken, onLogin}}>
            {children}
        </SessionContext.Provider>
    )
}

export {SessionContext, useSession, useUsuario, useToken, useLogin}