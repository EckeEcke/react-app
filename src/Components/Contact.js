import chris from "./Images/chris2.png";
import {Component} from "react";
import Navigation from "./Navigation";
import illustration from "./Images/contact.svg";


export class Contactpage extends Component {
    render(){
        return(
            <>
            <Navigation />
            <br></br>
            <div style={{backgroundColor:"#00BCD4", width:"100vw", maxWidth:"700px", fontSize:"1.5em", color:"white", margin: "20px auto"}}>
                
                <h2 style={{paddingLeft:"20px", paddingTop:"20px"}}>Contact</h2>
                <p style={{paddingLeft:"20px", marginBottom:"-20px"}}>
                    Christian Eckardt <br></br>
                    Zesenstraße 9 <br></br>
                    22301 Hamburg <br></br>
                    <br></br>
                    Email: eckardt.christian@web.de <br></br>
                    Phone: 0178 5325488
                    
                </p>
                <img style={{width: "90vw", maxWidth: "700px"}} src={illustration} alt="contact information"></img>
            </div>
            </>
        )

    }
}


export default Contactpage;
