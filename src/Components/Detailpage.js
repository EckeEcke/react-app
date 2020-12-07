import React from "react";
import Navigation from "./Navigation";
import Map from "./Maps";
import Entries from "./Data/Entries.data";
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'





function Detailpage() {


        const {id} = useParams();

        const entry = Entries[id-1];

        const lat = entry.lat;

        const lng = entry.lng;

        const infoTitle = entry.title;

        const image = entry.portrait;

        const date = entry.date;

        const author = entry.author;


        return(
            <>
            <Navigation />
    
            
           
            <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"center", backgroundColor:"white", minHeight:"100vh"}}>
            
            <div style={{width:"700px", maxWidth: "100vw", backgroundColor:"white", position: "relative", margin: "0px auto"}}>
            
            <div style={{padding:"0 10px", maxWidth:"500px", margin:"0 auto"}}>
            <br></br><br></br>
            <Link to="/"><button style={{padding: "8px", backgroundColor: "#FF8C00", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}><FontAwesomeIcon icon={faArrowLeft} /> Back</button></Link>
            <br></br><br></br>
            <h2>{entry.title}</h2>
            <h5>
            <img style={{float:"left", height: "40px", width:"40px", objectFit:"cover", borderRadius: "50%", verticalAlign:"middle"}} src={entry.portrait}></img>
    
            <span style={{margin:"8px 8px"}}>Travel date: {entry.date}</span>
            <br></br>
            <span style={{margin:"8px 8px"}}>Author: {entry.author}</span></h5>

            </div>
            
            
            <img style={{width:"100%", maxWidth:"500px", display:"block", margin:"0 auto"}} src={entry.image}></img>
            <div style={{padding:"10px"}}>
            <p style={{width:"100%", maxWidth:"500px", margin:"0 auto", paddingBottom:"30px"}}>{entry.description}
            <br></br><br></br><FontAwesomeIcon icon={faMapMarkerAlt} style={{color:"red"}}  /> <b>Barcelona, Spain</b></p>

            

            </div>
            
            </div>
    
            <div style={{width: "700px", maxWidth: "100%", height: "100%", justifyContent:"center", marginRight: "0"}}>
            <Map zoom={8} position={{lat, lng}} lat={lat} lng={lng} title={infoTitle} image={image} date={date} author={author} id={id} />
            </div>
            
            </div>
        
            </>
        )

   
  

}

export default Detailpage;