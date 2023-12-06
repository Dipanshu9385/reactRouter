import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home,About,Contact,Github } from './Component'


const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"github",
      element:<Github/>
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>
)
