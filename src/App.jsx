import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/screens/Layout'
import Home from './components/mainScreens/Home'

import Login from './components/mainScreens/AuthScreens/Login'
import Reg from './components/mainScreens/AuthScreens/Reg'

import FaceAuth from './components/mainScreens/AuthScreens/FaceAuth'
import Dashboard from './components/mainScreens/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
        </Route>
       
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Reg/>}/>
        <Route path='/logincam' element={<FaceAuth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
