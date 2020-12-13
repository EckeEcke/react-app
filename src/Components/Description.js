import React, {Component} from "react";
import airport from "./Images/airport2.svg";

function Description(){
    return(

  <div className="descriptionBox">

      <p className="descriptionText">

      <b>About:</b>
      <br></br><br></br>

      <img className="descriptionIllustration" src={airport} alt="person waiting for airplane"></img>
      
      I built this single page application in React as my final project 
      of the Full Stack Web Developer course at Hamburg Coding School. The blog entries are served by my own
        backend application running on Heroku. New posts and sorting posts by travel date gets also handled by my backend. For each entry there is a marker on the google map with an info window. 
        Clicking on an entrie´s image reveals a detail page with more information.

      </p>

  </div> 
    )
}

export default Description;