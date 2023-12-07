import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const Login = ()=>{

    const [pass, setPass] = useState(false);
    const [inpval, setinpval] = useState({
        email: "",
        password:""
    })
    
    const setval = async(e)=>{
        console.log(e.target)
        const {name, value} = e.target;

        setinpval(()=>{
            return{
                ...inpval,
                [name]: value
            }
        })
    }

    const loginUser = async(e)=>{
        e.preventDefault();
        const {email, password} = inpval;
        if(email == ""){
            alert("Please Enter Email");
        }else if(password == ""){
            alert("Please Enter Password")
        }else{
            alert("Complate")
        }
    }

    return(
        <>
            <h1>Login</h1>
            <form>
                <div className="row">
                    <label htmlFor="username">Email</label>
                    <input type="email" value={inpval.email} onChange={setval} id="username" name="email" autoComplete="off" placeholder="email@example.com" />
                </div>
                <div className="row">
                    <label htmlFor="password">Password</label>
                    <input type={!pass ? "password" : "text"} value={inpval.password} onChange={setval} id="password" name="password" placeholder="Password" />
                    <div style={{cursor: "pointer"}} onClick={()=> setPass(!pass)}>{!pass ? "Show" : "Hide"}</div>
                </div>
                <button type="submit" onClick={loginUser}>Login</button>
                <p>Don't Have an Account <NavLink to="/register">Register</NavLink></p>
            </form>
        </>
    )
}

export default Login;