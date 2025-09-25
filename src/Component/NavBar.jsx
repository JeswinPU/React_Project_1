import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/NavBar.css'
const NavBar = () => {
    let loc = useLocation(NavBar)
    console.log(loc);
    let data = loc.pathname.startsWith("/adminportal")

    return (
        <div id='navbar'>
            {
                data ? (
                    <>
                        <NavLink to={'/adminportal/'}>HOME</NavLink>
                        <NavLink to={'/adminportal/about'}>ABOUT</NavLink>
                        <NavLink to={'/adminportal/books'}>BOOKS</NavLink>
                        <NavLink to={'/adminportal/addbooks'}>ADD BOOKS</NavLink>
                        <NavLink to={'/adminportal/users'}>USERS</NavLink>
                        <NavLink to={'/adminportal/addusers'}>ADD USERS</NavLink>
                        <NavLink to={'/'}>LOGOUT</NavLink>
                    </>) : (
                        <>
                        <NavLink to={'/userportal/'}>HOME</NavLink>
                        <NavLink to={'/userportal/about'}>ABOUT</NavLink>
                        <NavLink to={'/userportal/books'}>BOOKS</NavLink>
                        <NavLink to={'/userportal/users'}>USERS</NavLink>
                        <NavLink to={'/userportal/cart'}>CART</NavLink>
                        <NavLink to={'/'}>LOGOUT</NavLink>
                        
                    </>)
            }
        </div>
    )
}

export default NavBar
