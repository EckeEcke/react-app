import React, {Component} from "react";
import Navigation from "./Navigation";
import Travelers from "./Images/travelers.svg";
import { Link } from 'react-router-dom';


export class NewPost extends Component {
    render(){
        return(
            <>
            
            <Navigation />
      
            
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center", justifyContent:"center", backgroundColor:"#00BCD4", height:"200%"}}>

            

            <form style={{backgroundColor:"#00BCD4", padding:"20px", width:"100%", maxWidth: "500px", textAlign:"center", marginBottom:"20px", color:"white"}}>
            
            <h2>Create new blog entry</h2>
                <label>Title</label>
                <br></br>
                <input style={{marginBottom:"10px", width: "200px", padding:"10px", borderStyle:"none"}} type="text" placeholder="Enter a title for your post"></input>
                <br></br>
                <label>Travel Date</label>
                <br></br>
                <input type="date" style={{marginBottom:"10px", width: "200px", padding:"10px", borderStyle:"none"}}></input>
                <br></br>
                <label>Image Link</label>
                <br></br>
                <input type="url" placeholder="Enter an image link" style={{marginBottom:"10px", width: "200px", padding:"10px", borderStyle:"none"}}></input>
                <br></br>
                <label>Longitude</label>
                <br></br>
                <input type="number" placeholder="Enter longitude" style={{marginBottom:"10px", width: "200px", padding:"10px", borderStyle:"none"}}></input>
                <br></br>
                <label>Latitude</label>
                <br></br>
                <input type="number" placeholder="Enter latitude" style={{marginBottom:"10px", width: "200px", padding:"10px", borderStyle:"none"}}></input>
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea cols="30" rows="8" placeholder="Here you can describe your trip" style={{marginBottom:"10px", width: "200px", padding:"10px", borderStyle:"none"}}></textarea>
                <br></br>
                <input type="submit" value="Save" style={{margin:"10px", padding: "8px", backgroundColor: "#32CD32", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}></input>
                <Link to="/"><button style={{margin:"10px", padding: "8px", backgroundColor: "#FF8C00", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}>Cancel</button></Link>


            </form>

            

            <img src={Travelers} alt="traveling people" style={{height:"400px"}}></img>

            </div>
            
            </>
        )
        }
    }

export default NewPost;