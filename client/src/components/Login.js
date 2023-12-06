import React from "react";
import './style.css'

const Login = ()=>{
    return(
        <>
            <h1>Login</h1>
            <form>
                <div className="row">
                    <label htmlFor="username">Email</label>
                    <input type="email" id="username" name="email" autoComplete="off" placeholder="email@example.com" />
                </div>
                <div className="row">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;