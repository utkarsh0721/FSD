import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/login", {    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await res.json()
        console.log(data);
    } 

  return (
    <div className='container'>
      <div className='login-card'>
        <h1 className='text-center'>Login</h1>
        
        <form className='form-content' onSubmit={handlesubmit}>
          <div className='input-group'>
            <label>Name</label>
            <input 
              type='text' 
              placeholder='Enter Your Name' 
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          
          <div className='input-group'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Enter Your Email' 
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          
          <div className='input-group'>
            <label>Password</label>
            <input 
              type='password' 
              placeholder='Enter Your Password' 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>


          <button type='submit' className='login-btn'>Sign In</button> 
        </form>
      </div>
    </div>
  )
}

export default Login