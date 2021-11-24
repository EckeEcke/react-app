import React, { useState } from "react";
import Map from "./Maps";
import Description from "./Description";
import Blogentries from "./Blogentries";
import Loading from "./Loading";
import plane from "./Images/plane.png";



function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    const [entries, setEntries] = useState([]);

    if(entries.length<1){
        fetch("https://blogbackend-by-chris.herokuapp.com/")
        .then(response => response.json())
        .then(data => {
            setEntries(data);
            setLoading(false);
        })
        .catch(function(error) {
            console.log(error);
        });
    } 
        return(   
            <>
            {isLoading && 
                <Loading />
            }
            {!isLoading &&
            <>
                <br></br>
                <br></br>

                <div className="dashboardMainFlexbox">
                  <div className="dashboardSubFlexbox">
                      <Blogentries entries={entries} />
                  </div>
          
                  <div className="dashboardMapcontainer"> 
                      <Description entries={entries} />
                      <Map entries={entries} zoom={2.4} id={1} />   
                  </div> 
                  <div className="planeContainer">
                    <img src={plane} alt="plane" />
                  </div>
                </div>
                </>
            }
            </>
        )
}

export default Dashboard;