import React, { useEffect, useState } from 'react'
import '../styles/Users.css'
import { useLocation } from 'react-router-dom'
const Users = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let first = fetch('http://localhost:4000/users')
        let second = first.then((a) => {
            return (a.json())
        })
        second.then((a) => {
            setUser(a)
        })

    }, [user])

    let loc = useLocation()

    let AdminAccess = loc.pathname.startsWith('/adminportal')

    function deluser(id, name) {
        let userdelconf = window.confirm(`Do you wish to remove ${name} from the userlist?`)
        if (userdelconf) {
            fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" })
        }
        else {
            alert(`user ${name} is not deleted`)
        }
    }
    // let pathloc = loc.pathname

    return (
        <>
            <div id="userbox">
                {user.map((a) => {
                    return (
                        <div className='UserCard'>
                            {/* <h1>ID :{a.id}</h1> */}
                            <div className="nameBox">
                                <h1>First Name :{a.firstName}</h1>
                                <h1>Full Name :{a.firstName + " " + a.lastName}</h1>
                            </div>
                            <div className="contactBox">
                                <h1>Email :{a.email}</h1>
                                <h1>Phone :{a.phone}</h1>
                            </div>
                            <br />
                            {(AdminAccess) ? (<button>View detials</button>) : (<></>)}
                            <br />
                            {(AdminAccess) ? (<button onClick={() => { deluser(a.id, a.firstName) }}>Delete User</button>) : (<></>)}
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default Users
