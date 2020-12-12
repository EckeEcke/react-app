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
        <nav style={{backgroundColor: "#00BCD4", display: "flex", flexDirection: "row", flexWrap:"wrap", alignItems: "center"}}>
            <Link to="/"  className="navlogo"><img style={{width: "70px"}} src={logo} alt="my Logo"></img></Link> 
            <h1 className="navTitle">Travel Blog Editor by Chris</h1>
            <div className="navBTNs">
                <Link to="/Contact" ><button style={{margin:"8px", padding: "8px", textDecoration: "none", color: "white", width: "90px", borderStyle: "none", background:"none"}}>Contact</button></Link>
                <Link to="/New"><button style={{margin:"8px", padding: "8px", backgroundColor: "#32CD32", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}><FontAwesomeIcon icon={faPlus} /> New Post</button></Link>
                <button onClick={loginAlert} style={{margin:"8px", padding: "8px", backgroundColor: "#32CD32", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}><FontAwesomeIcon icon={faUser}  /> Login</button>
            </div>
            

        </nav>
    )
}

export default Navigation;