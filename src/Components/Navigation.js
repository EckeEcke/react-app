import React from "react";
import logo from "./Images/logo-nosun.png";
import { Link } from 'react-router-dom'


function Navigation(){
    return(
        <nav style={{backgroundColor: "#00BCD4", display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Link to="/"><img src={logo} alt="my Logo" style={{margin:"1%", float: "left", height:"60px"}}></img></Link> 
            <h1 style={{textAlign: "left", margin: "1%", color: "white"}}>Travel Blog Editor by Chris</h1>
            <div style={{margin: "0 0 0 auto"}}>
                <Link to="/Contact" style={{margin:"20px", padding: "8px", textDecoration: "none", color: "white"}}>Contact</Link>
                <button style={{margin:"10px", padding: "8px", backgroundColor: "#6bf178", borderStyle: "none", borderRadius:"20px", width:"100px"}}>Login</button>
                <button style={{margin:"10px 20px 10px 10px", padding: "8px", backgroundColor: "#6bf178", borderStyle: "none", borderRadius:"20px", width:"100px"}}>New Post</button>
            </div>
            

        </nav>
    )
}

export default Navigation;