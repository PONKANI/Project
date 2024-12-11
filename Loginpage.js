import React from 'react'
import { PeopleFill } from 'react-bootstrap-icons'

function Loginpage() {
  return (
    
    <div className="login">
        <PeopleFill className='icon' size={50}/>
      <h2 className="h2tag">Login with your email</h2>
      <span>Don't have an Account? <a href="/create-account">Create Account</a></span>
   
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
       
    
           <span>Forget Password</span>
         
        <button type="submit">Login</button>
      
    
      
    </div>
  )
}

export default Loginpage