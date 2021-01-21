import React from "react";
import Blogentry from "./Blogentry";
import { useState} from "react";





const Blogentries = (props) => {

    
  

    
    return(
        <>
            

            {
                props.entries.map((entry, index) => {
                return(
                    <Blogentry blog={entry} key={index+1} id={index+1} />
                    )
                })
            }

        </>


    )
}

export default Blogentries;