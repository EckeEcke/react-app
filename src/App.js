import './App.css';
import Navigation from "./Components/Navigation";
import Map from "./Components//Maps";
import Description from "./Components/Description";
import Blogentries from "./Components/Blogentries";
import Contactpage from "./Components/contact";



function App() {
  return (
    <div className="App">
    
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
      <Contactpage />
      
      
    </div>
  );
}

export default App;
