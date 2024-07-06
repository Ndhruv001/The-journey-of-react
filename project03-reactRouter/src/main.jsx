import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Route , RouterProvider , createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Layout  from './Layout'
import Home  from './components/Home'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import About from './components/About'



const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route  path='' element={ <Home/>}/>
      <Route  path='About' element={ <About/>}/>
      <Route  path='Contact' element={ <Contact/>}/>
      <Route  path='*' element={ <ErrorPage/>}/>
    </Route>
  )
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {route}/>
  </React.StrictMode>,
)