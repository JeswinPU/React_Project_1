import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/AdminLogin.css'

const Userlogin = () => {
    let email = useRef()
    let pass = useRef()
    let nav = useNavigate()

    function login() {
        let emval = email.current.value
        let psval = pass.current.value

        if (emval === "" || psval === "") {
            alert("Please Provide/Fill all the Details")
        }
        else if (emval === "user@gmail.com" && psval === "user123") {
            alert("login Successfull")
            nav('/userportal/')
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return (
        <div id='adminform'>
            <form action="" onSubmit={(e)=>{
                e.preventDefault()
                login()
            }}>
                <input ref={email} type="email" placeholder='Enter your User email' />
                <br /><br />
                <input ref={pass} type="password" placeholder='password' />
                <br /><br />
                <button>Login as User</button>
            </form>
        </div>
    )
}

export default Userlogin
