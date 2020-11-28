import React from "react";

const BlogEntry = ({blog}) => {
    return(
        <div>
            <image src={blog.image}></image>
            <h3>{blog.title}</h3>
            <h5>{blog.date}</h5>
            <h5>{blog.author}</h5>


        </div>
    )
}

export default BlogEntry;