import React from 'react';
import '../styles/signup.css';
import { withRouter } from "react-router-dom";

import {instance} from '../utils/AxiosConfig';
var obj = {};
 const SignUp = (props)=>{
   return(
   
      <div className='main'>
          <div className='overlay'></div>
          <video src={require('../images/cappadocia.mp4')} autoPlay loop muted/>
          <div className='login_name'>
            
          <h1 className = "landing-header"><img align="middle" className = "landing-logo" src={require('../images/logo1.png')} alt=""/> T r a v e l W a l l e t</h1>
<br/><br/>

          <div className = "signup-form">
          <h3>INTRODUCE YOURSELF</h3>
      <label htmlFor="">Hi there! My name is</label>

      <input id = "username" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

      <label htmlFor="">Here’s my email address: </label>

      <input id = "email" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

      <label htmlFor="">And here’s my password:  </label>

      <input id = "password" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

     <button onClick = {()=>{
       console.log(obj);
       if(obj.password == undefined || obj.email == undefined || obj.username == undefined){
          alert("form is Incomplete");
       }
   else{
       var pr = instance.post('/signup',obj);
       pr.then((response)=>{
          console.log(response.data.Status);
          if(response.data.Status == "S"){
             alert("successful Registerd");
             props.history.push("/Dashboard");
          }else if(response.data.Status == "F"){
             alert("username or Email Id Already exist");
          }
       })}
     }} className = "btn">Sign me up!</button>
     
                
                
            </div>
          </div>
        </div>

   
   )
} 

export default withRouter(SignUp);
