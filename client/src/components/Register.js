import React, { useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";

const Register = ()=>{
    
    const [pass, Showpass] = useState(false)

    const [inpval, setinpval] = useState({
        fname: "",
        email: "",
        username: "",
        password: ""
    })

    // console.log(inpval)

    const setVal = async(e)=>{
        // console.log(e.target.value)
        const {name, value} = e.target

        setinpval(()=>{
            return{
                ...inpval,
                [name]: value
            }
        });
    };

    const addUser = async (e)=>{
        e.preventDefault();
        // console.log("clicked")

        const {fname, email, username, password} = inpval;
        
        if(fname == ""){
            alert("Please Enter Name")
        }else if(email == ""){
            alert("Please Enter Email")
        }else if(username == ""){
            alert("Please Enter Username")
        }else if(password == ""){
            alert("Please Enter Password")
        }else{
           const data = await fetch("http://localhost:5000/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, username, password
            })
           });

           const res = await data.json();
           console.log("indi")
           console.log(res)
           console.log("india")
        }

    }

    return(
        <>
            <h1>Register</h1>
            <form>
                <div className="row">
                    <label htmlFor="FName">Name</label>
                    <input type="text" value={inpval.fname} onChange={setVal} id="FName" name="fname" placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="Email">Email</label>
                    <input type="email" value={inpval.email} onChange={setVal} id="Email" name="email" placeholder="Email" />
                </div>
                <div className="row">
                    <label htmlFor="Usename">Username</label>
                    <input type="text" value={inpval.username} onChange={setVal} id="Usename" name="username" placeholder="Username" />
                </div>
                <div className="row">
                    <label htmlFor="password">Password</label>
                    <input type={!pass ? "password" : "text"} value={inpval.password} onChange={setVal} id="password" name="password" placeholder="Password" />
                    <div style={{cursor: "pointer"}} onClick={()=>Showpass(!pass)}>{!pass ? "Show" : "Hide"}</div>
                </div>
                <button type="submit" onClick={addUser}>Register</button>
                <p>Already Have an Account <NavLink to="/login">Login</NavLink></p>
            </form>
        </>
    )
}

export default Register;