import React from "react";
import Blogentry from "./Blogentry";
import Entries from "./Data/Entries.data";

const Blogentries = () => {



    return(
        <>
            {Entries &&
                Entries.map((entry) => {
                return(
                    <Blogentry blog={entry} />
                
                )}
            
        )}


        </>


    )
}

export default Blogentries;