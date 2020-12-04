import React, {Component} from "react";
import airport from "./Images/airport.svg";

function Description(){
    return(

    <div style={{maxWidth: "698px", width:"99.8%", backgroundColor:"#00BCD4", color:"white", border:"1px solid #00BCD4"}}>
  <p style={{padding:"5%", fontSize:"1.2em"}}>
  Hello visitors,
  <br></br><br></br>
  <img style={{float:"right", width: "100px", margin:"10px"}} src={airport} alt="person waiting for airplane"></img>
  welcome to my Travel Blog Editor built in React. This is my final project of the Full Stack Web Developer course at Hamburg Coding School. The rest is just some placeholder text
   until I know which features I managed to implement. Probably quite a few.

  </p>
  </div> 
    )
}

export default Description;