import React from "react";
import logo from "./Images/logo-nosun.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'


function Navigation(){

    function loginAlert(){
        alert("Login feature is not available yet.");
    }

    return(
        <nav className="navbar">
            <Link to="/"  className="navlogo"><img src={logo} alt="my Logo"></img></Link> 
            <h1 className="navTitle">Travel Blog Editor by Chris</h1>
            <div className="navBTNs">
                <Link to="/Contact" >
                    <button className="contactBTN">Contact</button>
                </Link>
                <Link to="/New">
                    <button className="navBTN"><FontAwesomeIcon icon={faPlus} /> New Post</button>
                </Link>
                <button onClick={loginAlert} className="navBTN"><FontAwesomeIcon icon={faUser}  /> Login</button>
            </div>
            

        </nav>
    )
}

export default Navigation;