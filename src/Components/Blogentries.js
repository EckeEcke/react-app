import React from "react";
import Blogentry from "./Blogentry";
import { useState} from "react";
//import Entries from "./Data/Entries.data";


const proxyURL = "";
const url = `https://blogbackend-by-chris.herokuapp.com/`;




const Blogentries = () => {

    const [entries, setEntries] = useState([]);

    fetch(proxyURL+url)
                .then(response => response.json())
                .then(data => {
                    setEntries(data);
                console.log(data);
                })

    
    return(
        <>
            {
    
            
            //entries &&
                entries.map((entry, index) => {
                return(
                    <Blogentry blog={entry} id={index+1} />
                
                )}
            
        )}


        </>


    )
}

export default Blogentries;