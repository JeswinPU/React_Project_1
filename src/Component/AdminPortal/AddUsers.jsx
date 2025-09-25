import React, { useRef } from 'react'
import '../../styles/AddUsers.css'
const AddUsers = () => {
  let form = useRef();

  function Adduser() {

    let conf = window.confirm("DO YOU WISH TO ADD THE USER?")
    if (conf) {
      let Fname = form.current[0].value;
      let Lname = form.current[1].value;
      let email = form.current[2].value;
      let phno = form.current[3].value;
      let address = form.current[4].value;
      let dob = form.current[5].value;

      let newUser = {
        firstName: Fname,
        lastName: Lname,
        email: email,
        phone: phno,
        address: address,
        birthDate: dob
      };

      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("THE USER HAS BEEN ADDED SUCCESSFULLY", data);
          alert(`THE USER ${newUser.firstName} has been added to the user list`);
        })
        .catch((error) => {
          console.log(`Some error ${error} came up, please check`);
        });
    } else {
      alert("USER ADDITION WAS STOPPED ABRUPTLY")
    }

  }

  return (
    <div id='FormBoxOutside'>

      <div id='FormBoxInside'>

        <h1>PROVIDE THESE DETAILS TO ADD THE USER</h1>
        <form
          action=""
          ref={form}
          onSubmit={(e) => {
            e.preventDefault();
            Adduser();
          }}
        >
          <input type="text" placeholder='Enter First name' />
          <br /><br />
          <input type="text" placeholder='Enter Last name' />
          <br /><br />
          <input type="email" placeholder='Enter Email' />
          <br /><br />
          <input type="number" placeholder='Enter Phone number' />
          <br /><br />
          <input type="text" placeholder='Enter you Address' />
          <br /><br />
          <input type="date" placeholder='Enter you birthDate' />
          <br /><br />
          <button type='submit'>ADD USER</button>
        </form>
      </div>
    </div>
  )
}

export default AddUsers
