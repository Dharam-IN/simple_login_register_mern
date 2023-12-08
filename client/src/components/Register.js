import React, { useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";

const Register = ()=>{

    const [showhide, sethideshow] = useState(false);

    
    const [inpval, setinpval] = useState({
        fname:"",
        email:"",
        username: "",
        password: ""
    });
    // console.log(inpval)
    
    const setval = async (e)=>{
        // console.log(e.target)

        const {name, value} = e.target;

        setinpval(()=>{
            return{
                ...inpval,
                [name]: value
            }
        })
    };

    const addData = async (e)=>{
        e.preventDefault();

        const {fname, email, username, password} = inpval;

        if(fname == ""){
            alert("Please Enter Name");
        } else if(email == ""){
            alert("Please Enter Email");
        } else if(username == ""){
            alert("Please Enter Username");
        } else if(password == ""){
            alert("Please Enter Password");
        }else{
            console.log("res")
            // alert("Done")

            const data = await fetch("http://localhost:5000/register",{
                method: "POST",
                headers:{
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    fname, email, username, password
                })
            });

            
            const res = await data.json();
            console.log(res)

            if(res.status === 201){
                alert("register successfuly")
                setinpval({...inpval, fname: "", email: "", username: "", password: ""})
            }
        }
    }

    return(
        <>
            <h1>Register</h1>
            <form>
                <div className="row">
                    <label htmlFor="FName">Name</label>
                    <input type="text" onChange={setval} id="FName" name="fname" placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="Email">Email</label>
                    <input type="email" onChange={setval} id="Email" name="email" placeholder="Email" />
                </div>
                <div className="row">
                    <label htmlFor="Usename">Username</label>
                    <input type="text" onChange={setval} id="Usename" name="username" placeholder="Username" />
                </div>
                <div className="row">
                    <label htmlFor="password">Password</label>
                    <input type={!showhide ? "password" : "text"} id="password" onChange={setval} name="password" placeholder="Password" />
                    <div style={{cursor: "pointer"}} onClick={()=> sethideshow(!showhide)}>{!showhide ? "Show" : "Hide"}</div>
                </div>
                <button type="submit" onClick={addData}>Register</button>
                <p>Already Have an Account <NavLink to="/login">Login</NavLink></p>
            </form>
        </>
    )
}

export default Register;