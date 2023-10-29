import React from 'react';
import '../styles/landing.css'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

export const Landing = ()=>{
    return (
        <div className = "landing ">
           
            
            <video src={require('../images/beach.mp4')} autoPlay loop muted/>
            <div className="landing_name">
            <h1 className = "landing-header"><img align="middle" className = "landing-logo" src={require('../images/logo1.png')} alt=""/> T r a v e l W a l l e t</h1>
                <p className = "landing-desc">Exploring the World, One Expense at a Time.</p>
                <div>
                    <NavLink to = "/login"><button className = "loginBtn">Log In</button></NavLink>  
                    <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
                </div>
               
            </div>
            
<br/><br/><br/>

            <div className = "landing-heading">
                <h1 className = "landing-header"><img align="middle" className = "landing-logo" src={require('../images/logo1.png')} alt=""/> Your Ultimate Travel Companion</h1>
                <p className = "landing-desc">Explore, Expense, and Experience with Travel Wallet</p>
                <img className = "landing-big" src={require('../images/dsiplay.png')} alt=""/>   
            </div>  

            <div className = "landing-feature">
                 <div>   
                <img className = "landing-img" src={require('../images/splitwise.png')} alt=""/>   
                </div>
                <div className = "landing-content">
                <h1  >Maintaining travel logs</h1><h1> has never been easier</h1> 
                <ul>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Plan new trips</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Split travel expenses with friends</li>
                    <li><i class="fas fa-check-circle"></i> &nbsp;&nbsp;Access details of all your previous trips</li>
                </ul>

                <a href="http://localhost:3000/signup">   <button className = "landing-button">  Get Started</button></a>
                </div>
                </div> 

        </div>
       
       
    )
}