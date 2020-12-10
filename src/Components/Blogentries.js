import React from "react";
import Blogentry from "./Blogentry";
import { useState} from "react";





const Blogentries = () => {

    const [entries, setEntries] = useState([]);
    if(entries.length<1){
        fetch("https://blogbackend-by-chris.herokuapp.com/")
        .then(response => response.json())
        .then(data => {
            setEntries(data);
        })
    }
  

    
    return(
        <>
            {
                entries.map((entry, index) => {
                return(
                    <Blogentry blog={entry} key={index+1} id={index+1} />
                    )
                })
            }

        </>


    )
}

export default Blogentries;