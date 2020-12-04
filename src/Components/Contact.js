
import {Component} from "react";
import Navigation from "./Navigation";
import illustration from "./Images/contact.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export class Contactpage extends Component {
    render(){
        return(
            <>
            <Navigation />
            <div style={{backgroundColor:"#00BCD4", maxWidth:"100vw", paddingTop:"20px", margin:"0"}}>
            <div style={{backgroundColor:"#00BCD4", maxWidth:"700px", fontSize:"1.5em", color:"white", margin: "20px auto", paddingBottom:"120px"}}>
                
                <h2 style={{paddingLeft:"20px", paddingTop:"20px"}}>Contact</h2>
                <p style={{paddingLeft:"20px", marginBottom:"-20px"}}>
                    Christian Eckardt <br></br>
                    Zesenstraße 9 <br></br>
                    22301 Hamburg <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faEnvelope} /> &nbsp; eckardt.christian@web.de <br></br>
                    <FontAwesomeIcon icon={faPhone} /> &nbsp; 0178 5325488
                    
                </p>
                <img style={{width: "90vw", maxWidth: "700px"}} src={illustration} alt="contact information"></img>
            </div>


            </div>
           
            </>
        )

    }
}


export default Contactpage;
