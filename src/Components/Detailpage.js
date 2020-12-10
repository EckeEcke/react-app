import React, { useState } from "react";
import Map from "./Maps";
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import styles from "./modules/detailpage.module.css";





function Detailpage() {

    const {id} = useParams();
    
    const [entries, setEntries] = useState([]);
    const [entry, setEntry] = useState({});


 
    if(entries.length<1){
        fetch("https://blogbackend-by-chris.herokuapp.com/")
                .then(response => response.json())
                .then(data => {
                    setEntries(data);
                    setEntry(data[id-1]);
            
                    

                })
           
        }


        return(
            <>
            
    
            {entry &&
           
            <div className={styles.detailpageWrapper}>
            
                <div className={styles.detailpageContainer}>
            
                    <div className={styles.detailpageContentbox}>
            
            <br></br><br></br>
            
                        <Link to="/">
                            <button className={styles.orangeBTN}>
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
                            </button>
                        </Link>

            <br></br><br></br>
                        <h2>{entry.title}</h2>
                        <h5>
                            <img className={styles.detailpagePortrait} alt="portrait of user" src={entry.portrait}></img>
                            <span style={{margin:"8px 8px"}}>Travel date: {entry.date}</span>
            <br></br>
                            <span style={{margin:"8px 8px"}}>Author: {entry.author}</span>
                        </h5>

                    </div>
            
            
                <img className={styles.detailpageImage} alt="impressions of vacation" src={entry.image}></img>
            <div style={{padding:"10px"}}>

                <p className={styles.detailpageText}>{entry.description}
            <br></br><br></br>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{color:"red"}}  /> <b>{entry.city}, {entry.country}</b></p>

            </div>
            
            </div>
    
            <div className={styles.detailpageMapcontainer}>

                 <Map zoom={8}  position={{lat:0, lng: 0}} lat={0} lng={0}  id={id} />

            </div>
            
            </div>
            }
            </>
               
        )
}

export default Detailpage;