import React from "react";


const BlogEntry = ({blog}) => {
    return(
        <div style={{width: "220px", margin: "2%", backgroundColor:"white", border:"0.5px solid rgb(211,211,211,0.8)"}}>
            <center><img alt="image from vacation" style={{width: "100%", height: "150px", objectFit:"cover", margin:"0"}}src={blog.image}></img></center>
            <div style={{backgroundColor:"white", padding:"1% 1% 0 1%"}}>
            <h4 style={{margin:"0"}}>{blog.title}
            <br></br>
            <span style={{fontSize: "0.5em"}}>date: {blog.date}</span>
            </h4>
            <h5>
            <img alt="profile" style={{height: "30px", width:"30px", objectFit:"cover", borderRadius: "50%", verticalAlign:"middle", float:"left", marginRight: "10px"}} src={blog.portrait}></img> 
            {blog.author}<br></br>
            <span style={{fontSize:"0.6em"}}>created: {blog.postdate}</span>
            </h5>
         

            </div>
            


        </div>
    )
}

export default BlogEntry