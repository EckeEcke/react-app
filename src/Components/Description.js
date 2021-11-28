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
      of the Full Stack Web Developer course at Hamburg Coding School. Blog entries are served by my own
        backend application running on Heroku. New posts and sorting posts by travel date gets also handled by my backend. The map is integrated via google maps API. Every entry gets a clickable marker on the map. 
        Lattitude and longitude of each location is fetched from the openweathermap API.
      </p>

  </div> 
    )
}

export default Description;