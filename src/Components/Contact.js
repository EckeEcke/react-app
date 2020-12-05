
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
            <div style={{backgroundColor:"#00BCD4", width:"100%", maxWidth:"100vw", paddingTop:"20px", margin:"0"}}>
            <div style={{backgroundColor:"#00BCD4", width:"90%", maxWidth:"750px", fontSize:"1.3em", color:"white", margin: "20px auto", paddingBottom:"100px"}}>
                
                <h2 style={{paddingTop:"20px", textAlign:"center", marginBottom:"-4px"}}>Contact</h2>

                <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
                    <div>
                        
                        <p style={{padding:"10px", marginBottom:"20px", marginRight:"30px"}}>
                        <h3 style={{marginBottom:"4px"}}>Adress:</h3>
                        Christian Eckardt <br></br>
                        Zesenstraße 9 <br></br>
                        22301 Hamburg <br></br>
                        <br></br>
                        <h3 style={{marginBottom:"4px"}}><FontAwesomeIcon icon={faEnvelope} /> Mail:</h3>
                         eckardt.christian@web.de <br></br>
                         <h3 style={{marginBottom:"4px"}}><FontAwesomeIcon icon={faPhone} /> Phone:</h3>
                         0178 5325488
                        
                        </p>
                    </div>
                    <div style={{padding:"20px", marginTop:"10px"}}>
                        <h3>Send me a message:</h3>
                        <form name="contact" action="/Contact" method="post">
                            <input type="hidden" name="form-name" value="contact" />
                            <label>Your Name: </label>
                            <br></br>
                            <input required type="text" name="name" placeholder="Enter your name" style={{width:"300px", padding:"10px", borderStyle:"none"}}/>   
                            <br></br><br></br>
                            <label>Message: </label>
                            <br></br>
                            <textarea required name="message" placeholder="Enter your message" rows="8" style={{width:"300px", padding:"10px", borderStyle:"none"}}></textarea>
                            <br></br>
                            <center><button type="submit" style={{margin:"10px 20px 10px 10px", padding: "8px", backgroundColor: "#32CD32", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}>Send</button></center>
                            



                        </form>

                    </div>
               



                </div>
                
            
                <br></br>
                <img style={{width: "90vw", maxWidth: "700px", display:"block", margin:"0 auto"}} src={illustration} alt="contact information"></img>
            </div>


            </div>
           
            </>
        )

    }
}


export default Contactpage;
