import React, { useState } from 'react'
import Adminlogin from './AdminPortal/AdminLogin.jsx'
import Userlogin from './UserPortal/UserLogin.jsx'
import '../styles/AdminLogin.css'


const LandingPage = () => {

    let [bool, setBool] = useState(false)
    function Toggle() {
        setBool(!bool)
    }

    return (
        <div id='welcomepage'>
            <nav>
                <h1>WELCOME TO E-LIBRARY</h1>
            </nav>
            <div id='loginMain'>
                Toggle between User/Admin <button id='togglebutton' onClick={Toggle}>{bool ? "Admin Login" : "User Login"}</button>
                <div id='box'>
                    <h1>{bool ? "Hey User" : "Hey Admin"}</h1>
                    {bool ? <Userlogin /> : <Adminlogin />}
                </div>
            </div>
        </div>
    )
}

export default LandingPage
