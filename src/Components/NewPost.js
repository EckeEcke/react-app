import React, {Component} from "react";
import Travelers from "./Images/travelers.svg";
import { Link } from 'react-router-dom';
import styles from "./modules/newpost.module.css";


export class NewPost extends Component {
    render(){
        return(
            <>
            
      
      
            
            <div className={styles.wrapper}>
            

            <form className={styles.form}>
            
            <h2>Create new blog entry</h2>
                <label>Title</label>
                <br></br>
                <input className={styles.formInput} type="text" placeholder="Enter a title for your post"></input>
                <br></br>
                <label>Travel Date</label>
                <br></br>
                <input type="date" className={styles.formInput}></input>
                <br></br>
                <label>Image Link</label>
                <br></br>
                <input type="url" placeholder="Enter an image link" className={styles.formInput}></input>
                <br></br>
                <label>Longitude</label>
                <br></br>
                <input type="number" placeholder="Enter longitude" className={styles.formInput}></input>
                <br></br>
                <label>Latitude</label>
                <br></br>
                <input type="number" placeholder="Enter latitude" className={styles.formInput}></input>
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea cols="30" rows="8" placeholder="Here you can describe your trip" className={styles.formInput}></textarea>
                <br></br>
                <input type="submit" value="Save" className={styles.greenBTN}></input>
                <Link to="/"><button className={styles.orangeBTN}>Cancel</button></Link>


            </form>

            

            <img src={Travelers} alt="traveling people" style={{height:"400px"}}></img>

            </div>
            
            </>
        )
        }
    }

export default NewPost;