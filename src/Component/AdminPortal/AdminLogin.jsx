import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/AdminLogin.css'


const Adminlogin = () => {
    let email = useRef()
    let pass = useRef()
    let nav = useNavigate()
    function login() {
        let emval = email.current.value
        let psval = pass.current.value

        if (emval === "" || psval === "") {
            alert("Please Provide/Fill all the Details")
        }
        else if (emval === "admin@gmail.com" && psval === "admin123") {
            alert("login Successfull")
            nav("/adminportal/")
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <>
            <div id='adminform'>
                <form action="" onSubmit={(e) => {
                    e.preventDefault()
                    login()
                }}>
                    <input ref={email} type="email" placeholder='Enter your Admin email' />
                    <br /><br />
                    <input ref={pass} type="password" placeholder='password' />
                    <br /><br />
                    <button >Login as Admin</button>
                </form>
            </div>
        </>
    )
}

export default Adminlogin
