import React from "react";
import Blogentry from "./Blogentry";
import Entries from "./Data/Entries.data";

const Blogentries = () => {

    let sortedEntries = Entries.sort((a, b) => new Date(b.date).getTime() -  new Date(a.date).getTime());




    return(
        <>
            {Entries &&
                sortedEntries.map((entry, index) => {
                return(
                    <Blogentry blog={entry} id={index+1} />
                
                )}
            
        )}


        </>


    )
}

export default Blogentries;