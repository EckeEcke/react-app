import React, {Component} from "react";
import Navigation from "./Navigation";
import Travelers from "./Images/travelers.svg";


export class NewPost extends Component {
    render(){
        return(
            <>
            
            <Navigation />
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center", justifyContent:"center", backgroundColor:"#00BCD4", height:"200%"}}>
            
            <form style={{backgroundColor:"#00BCD4", padding:"20px", width:"100%", maxWidth: "500px", textAlign:"center", marginBottom:"20px"}}>
                <label>Title</label>
                <br></br>
                <input type="text" placeholder="Enter a title for your post"></input>
                <br></br>
                <label>Travel Date</label>
                <br></br>
                <input type="date"></input>
                <br></br>
                <label>Image Link</label>
                <br></br>
                <input type="url" placeholder="Enter an image link"></input>
                <br></br>
                <label>Longitude</label>
                <br></br>
                <input type="number" placeholder="Enter longitude"></input>
                <br></br>
                <label>Latitude</label>
                <br></br>
                <input type="number" placeholder="Enter latitude"></input>
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea cols="30" rows="10" placeholder="Here you can describe your trip"></textarea>
                <br></br>
                <input type="submit" value="Save"></input>


            </form>

            

            <img src={Travelers} alt="traveling people" style={{height:"400px"}}></img>

            </div>
            
            </>
        )
        }
    }

export default NewPost;