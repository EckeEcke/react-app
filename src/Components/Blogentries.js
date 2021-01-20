import React from "react";
import Blogentry from "./Blogentry";
import { useState} from "react";
import Loading from "./Loading";




const Blogentries = () => {

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