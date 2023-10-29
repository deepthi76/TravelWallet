import React from 'react';
import '../styles/signup.css';
import {NavLink} from 'react-router-dom';
export const Login = (props)=>{
    return(  
        <div className='main'>
          <div className='overlay'></div>
          <video src={require('../images/mountain.mp4')} autoPlay loop muted/>
          <div className='login_name'>
            
          <h1 className = "landing-header"><img align="middle" className = "landing-logo" src={require('../images/logo1.png')} alt=""/> T r a v e l W a l l e t</h1>
<br/><br/>

          <div className = "signup-form">
                <h2>Welcome to T r a v e l W a l l e t</h2>
                <label htmlFor="">Email address</label>
                <input id = "email" onChange = {props.input} className = "form-control" type="text"/>

                <label htmlFor="">Password</label>
                <input id = "password" onChange = {props.input} className = "form-control" type="text"/>

                {props.sts && <p style = {{color: "red"}}><i class="fas fa-exclamation-circle"></i> Invalid Username or Password</p>}
                <button onClick = {props.login} className = "btn">Log In</button>
                <NavLink to = "/signup"><button className = "btn">Sign Up</button></NavLink>
            </div>
          </div>
        </div>
     
    )
} 