import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'


function App() {

  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/s' element={<Service/>}></Route>
  </Routes>
  
  </BrowserRouter>
  
  
  </>
}

export default App