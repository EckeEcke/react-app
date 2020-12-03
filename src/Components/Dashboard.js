import React, {Component} from "react";
import Navigation from "./Navigation";
import Map from "./Maps";
import Description from "./Description";
import Blogentries from "./Blogentries";



export class Dashboard extends Component {

    render() {
        return(
            <>
            <Navigation />
                  <br></br>
                  <br></br>
                  <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"center"}}>
                  <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", width:"700px", justifyContent: "center"}}>
                  <Blogentries />
                  </div>
            
                  <div style={{width: "700px", height: "600px", justifyContent:"center", marginTop: "14px"}}> 
                  <Description />
                  <Map />
                  </div>
                  
                  </div>
        
            </>
        )

    }
  

}

export default Dashboard;