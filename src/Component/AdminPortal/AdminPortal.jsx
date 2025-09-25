import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar'
import Home from '../Home'
import About from '../About'
import Books from '../Books'
import AddBooks from './AddBooks'
import Users from '../Users'
import AddUsers from './AddUsers'
import ReadBook from '../ReadBook'
import Footer from '../Footer'

const AdminPortal = () => {
    
    
    return (
        <div>
            
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/books' element={<Books/>}/>
                <Route path='/addbooks' element={<AddBooks/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/addusers' element={<AddUsers/>}/>
                <Route path='/readbook/:id' element={<ReadBook/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default AdminPortal
