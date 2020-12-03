import React from "react";


const BlogEntry = ({blog}) => {
    return(
        <div className="Blogentry" style={{width: "300px", margin: "2%", backgroundColor:"white", border:"0.5px solid rgb(211,211,211,0.8)"}}>
            <center><img alt="image from vacation" style={{width: "100%", height: "200px", objectFit:"cover", margin:"0"}}src={blog.image}></img></center>
            <div style={{backgroundColor:"white", padding:"1% 1% 0 1%"}}>
            <h3 style={{margin:"0"}}>{blog.title}
            <br></br>
            <span style={{fontSize: "0.6em"}}>travel date: {blog.date}</span>
            </h3>
            <h5>
            <img alt="profile" style={{height: "30px", width:"30px", objectFit:"cover", borderRadius: "50%", verticalAlign:"middle", float:"left", marginRight: "10px"}} src={blog.portrait}></img> 
            {blog.author}<br></br>
            <span style={{fontSize:"0.7em"}}>created: {blog.postdate}</span>
            </h5>
         

            </div>
            


        </div>
    )
}

export default BlogEntry