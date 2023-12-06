import React from "react";
import './style.css'

const Register = ()=>{
    return(
        <>
            <h1>Register</h1>
            <form>
                <div className="row">
                    <label htmlFor="FName">Name</label>
                    <input type="email" id="FName" name="name" placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" name="email" placeholder="Email" />
                </div>
                <div className="row">
                    <label htmlFor="Usename">Username</label>
                    <input type="text" id="Usename" name="username" placeholder="Username" />
                </div>
                <div className="row">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;