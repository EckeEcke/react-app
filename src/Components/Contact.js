
import {Component} from "react";
import illustration from "./Images/contact2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import styles from "./modules/contact.module.css";

export class Contactpage extends Component {
    render(){
        return(
            <>
            
            <div className={styles.contactContainer}>

                <div className={styles.contactInfobox}>
                
                <h2 className={styles.contactpageHeading}>Contact</h2>

                    <div className={styles.contactpageContentbox}>
                        <div>
                        
                            <p className={styles.contactpageContent}>
                                
                            <span style={{marginBottom:"4px"}}><b>Address:</b></span>
                            <br></br>
                            Christian Eckardt <br></br>
                            Zesenstraße 9 <br></br>
                            22301 Hamburg <br></br>
                            <br></br>

                            <span style={{marginBottom:"4px"}}><FontAwesomeIcon icon={faEnvelope} /><b> Mail:</b> </span>
                            <br></br>
                            eckardt.christian@web.de <br></br>
                            <span style={{marginBottom:"4px"}}><FontAwesomeIcon icon={faPhone} /><b> Phone:</b></span>
                            <br></br>
                            0178 5325488
                            
                            </p>

                        </div>

                    <div style={{padding:"20px", marginTop:"10px"}}>
                        
                        <h3>Send me a message:</h3>

                        <form name="contact" action="/Contact" method="post">

                            <input type="hidden" name="form-name" value="contact" />
                            <label>Your Name: </label>
                            <br></br>
                            <input className={styles.contactInput} required type="text" name="name" placeholder="Enter your name" />   
                            <br></br><br></br>
                            <label>Message: </label>
                            <br></br>
                            <textarea required name="message" placeholder="Enter your message" rows="8" className={styles.contactInput}></textarea>
                            <br></br>
                            <center><button type="submit" className={styles.contactBTN}>Send</button></center>
            
                        </form>

                    </div>
               
                    </div>
                
                     <br></br>

                    <img className={styles.contactIllustration} src={illustration} alt="contact information"></img>
                
                </div>


            </div>
           
            </>
        )

    }
}


export default Contactpage;
