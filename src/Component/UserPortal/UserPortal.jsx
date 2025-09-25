import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from '../Home'
import About from '../About'
import Books from '../Books'
import NavBar from '../NavBar'
import ReadBook from '../ReadBook'
import Users from '../Users'
import Footer from '../Footer'

const UserPortal = () => {
    return (
        <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/books' element={<Books />} />
                    <Route path='/cart'element={<Cart/>}/>
                    <Route path='/readbook/:id' element={<ReadBook/>}/>
                    <Route path='/users' element={<Users/>}></Route>
                </Routes>
                <Footer/>
        </div>
    )
}

export default UserPortal
