import React from "react";
import { Link } from 'react-router-dom';
import styles from "./modules/blogentry.module.css";


const BlogEntry = ({blog, id}) => {
    return(
        <div className={styles.Blogentry}>
            <Link to={`/Details/${id}`}>
                <center>
                    <img 
                        alt="image from vacation" 
                        className={styles.previewImage} 
                        src={blog.image} 
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://jugendbildungsmesse.de/wp-content/uploads/2017/07/jugendbildungsmesse-work-and-travel-reisen.jpg"}} >
                    </img>
                </center>
            </Link>

            <div className={styles.entryBox}>
                <h3 style={{margin:"0"}}>{blog.title}
                    <br></br>
                    <span style={{fontSize: "0.6em"}}>travel date: {blog.date}</span>
                </h3>

                 <h5>
                    <img 
                        alt="profile" 
                        className={styles.profileImage} 
                        src={blog.portrait} 
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png"}}>
                    </img>
 
                    {blog.author}

                    <br></br>
                    
                    <span style={{fontSize:"0.7em"}}>created: {blog.postdate}</span>
                </h5>
            </div>
            
        </div>
    )
}

export default BlogEntry