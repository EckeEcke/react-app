import React from "react";
import logo from "./logo-nosun.png";


function Navigation(){
    return(
        <nav style={{backgroundColor: "#00BCD4", display: "flex", flexDirection: "row", alignItems: "center"}}>
            <img src={logo} alt="my Logo" style={{margin:"1%", float: "left", height:"60px"}}></img>
            <h1 style={{textAlign: "left", margin: "1%", color: "white"}}>Travel Blog Editor by Chris</h1>
            <div style={{margin: "0 0 0 auto"}}>
                <a href="https://nifty-hopper-c1da01.netlify.app/" style={{margin:"5px", padding: "8px", textDecoration: "none", color: "white"}}>Contact</a>
                <button style={{margin:"5px", padding: "8px", backgroundColor: "#6bf178", borderStyle: "none", borderRadius:"20px", width:"100px"}}>Login</button>
                <button style={{margin:"5px", padding: "8px", backgroundColor: "#6bf178", borderStyle: "none", borderRadius:"20px", width:"100px"}}>New Post</button>
            </div>
            

        </nav>
    )
}

export default Navigation;