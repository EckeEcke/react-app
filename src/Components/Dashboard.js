import React, {Component} from "react";
import Map from "./Maps";
import Description from "./Description";
import Blogentries from "./Blogentries";





export class Dashboard extends Component {


    render() {
        return(
            <>
            
                  <br></br>
                  <br></br>

                  <div className="dashboardMainFlexbox">
                    <div className="dashboardSubFlexbox">
                        <Blogentries />
                    </div>
            
                    <div className="dashboardMapcontainer"> 
                        <Description />
                        <Map zoom={2.2} id={1} />
                    </div> 
                  </div>
        
            </>
        )

    }
  

}

export default Dashboard;