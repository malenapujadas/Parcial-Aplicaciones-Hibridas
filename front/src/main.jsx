import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './index.css'
import Home, { loader as homeLoader } from './pages/Home'
import Login from './pages/Login.jsx'
import Layout from './components/Layout.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'


let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: homeLoader
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/proyectos',
        element: <Login/>,
      },
      {
        path: '/detalle/:id',
        element: <DetalleProducto/>,
      },
    ],
  },
  {
    path:"/admin",
    element: <div>PANEL ADMIN</div>
  },
  {
    path:'*',
    element: <div>404</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
