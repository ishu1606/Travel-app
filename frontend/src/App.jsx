import React from 'react'
import { BrowserRouter , Route  , Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/sign-up' exact element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App