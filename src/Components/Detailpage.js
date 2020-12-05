import React from "react";
import Navigation from "./Navigation";
import Map from "./Maps";
import Entries from "./Data/Entries.data";
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'





function Detailpage() {


        const {id} = useParams();

        const entry = Entries[id-1];

        return(
            <>
            <Navigation />
            <br></br>
            <Link to="/"><button style={{margin:"10px", padding: "8px", backgroundColor: "#FF8C00", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}><FontAwesomeIcon icon={faArrowLeft} /> Back</button></Link>
           
            <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"center"}}>
            <div style={{width:"700px", maxWidth: "100vw", backgroundColor:"white", position: "relative", margin: "14px auto", border:"1px solid rgb(211,211,211,0.8)"}}>
            <div style={{padding:"0 10px", width:"100%", maxWidth:"600px", margin:"0 auto"}}>
            <h2>{entry.title}</h2>
            <h5>
            <img style={{float:"left", height: "40px", width:"40px", objectFit:"cover", borderRadius: "50%", verticalAlign:"middle"}} src={entry.portrait}></img>
    
            <span style={{margin:"8px 8px", color:"grey"}}>Travel date: {entry.date}</span>
            <br></br>
            <span style={{margin:"8px 8px", color:"grey"}}>Author: {entry.author}</span></h5>

            </div>
            
            
            <img style={{width:"100%", maxWidth:"600px", display:"block", margin:"0 auto"}} src={entry.image}></img>
            <div style={{padding:"10px"}}>
            <p style={{width:"100%", maxWidth:"600px", margin:"0 auto", paddingBottom:"30px"}}>{entry.description}</p>
            </div>
            
            </div>
    
            <div style={{width: "700px", maxWidth: "100%", height: "100%", justifyContent:"center", margin: "14px auto"}}> 
            <Map />
            </div>
            
            </div>
        
            </>
        )

   
  

}

export default Detailpage;