import React, {Component} from "react";
import Navigation from "./Navigation";
import Map from "./Maps";
import Description from "./Description";
import Blogentries from "./Blogentries";
import Entries from "./Data/Entries.data";
import chris from "./Images/chris2.png";




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
            
                  <div style={{width: "700px", height: "600px", justifyContent:"center", justifyContent:"center", margin:"14px auto"}}> 
                  <Description />
                  <Map zoom={2.2} lat={53.551085} lng={9.993682} entries={Entries} title={"Hamburg, meine Perle"} image={chris} date={"Hi there, I am a passionate web developer living in Hamburg since 2017. Hope you enjoy checking out my blog editor."} date={"2020-07-28"} />
                  </div>
                  
                  </div>
        
            </>
        )

    }
  

}

export default Dashboard;