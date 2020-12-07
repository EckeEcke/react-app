import React from "react";
import Blogentry from "./Blogentry";
import Entries from "./Data/Entries.data";

const Blogentries = () => {

    
    return(
        <>
            {Entries &&
                Entries.map((entry, index) => {
                return(
                    <Blogentry blog={entry} id={index+1} />
                
                )}
            
        )}


        </>


    )
}

export default Blogentries;