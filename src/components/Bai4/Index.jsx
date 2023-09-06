import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from "./All"
import HomePage from './HomePage'
import About from './About/About'
import Service from './Service/Service'
import Contact from './Contact/Contact'


function Index() {
  return (
    <div>
        <Routes>
            <Route path='/' element ={<HomePage/>}>
                <Route index element={<All/>}></Route>
                <Route path='/about'element={<About/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Route>
        </Routes>
    </div>
  )
}

export default Index