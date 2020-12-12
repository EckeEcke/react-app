import React from "react";
import { useForm } from "react-hook-form";
import Travelers from "./Images/travelers.svg";
import { Link, useHistory } from 'react-router-dom';
import styles from "./modules/newpost.module.css";


function NewPost() {

    let history = useHistory();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://blogbackend-by-chris.herokuapp.com/new', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        })
        .then(setTimeout(function(){history.push("/")},2000))
    };    
 
    


        return(
            <>
            
            <div className={styles.wrapper}>
            

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            
            <h2>Create new blog entry</h2>
                <label>Title</label>
                <br></br>
                <input ref={register} name="title" className={styles.formInput} type="text" placeholder="Enter a title for your post" maxlength="30" required></input>
                <br></br>
                <label>Your name</label>
                <br></br>
                <input ref={register} name="author" className={styles.formInput} type="text" placeholder="Enter your name" required></input>
                <br></br>
                <label>Country</label>
                <br></br>
                <input ref={register} name="country" className={styles.formInput} type="text" placeholder="Enter country" required></input>
                <br></br>
                <label>City</label>
                <br></br>
                <input ref={register} name="city" className={styles.formInput} type="text" placeholder="Enter city" required></input>
                <br></br>
                <label>Travel Date</label>
                <br></br>
                <input ref={register} name="date" type="date" className={styles.formInput} required></input>
                <br></br>
                <label>Image Link</label>
                <br></br>
                <input ref={register} name="image" type="url" placeholder="Enter an image link" className={styles.formInput} required></input>
                <br></br>
                <label>Portrait Link</label>
                <br></br>
                <input ref={register} name="portrait" type="url" placeholder="Enter link to portrait" className={styles.formInput} required></input>
                <br></br>
                <label>Longitude</label>
                <br></br>
                <input ref={register} name="lng" type="number" placeholder="Enter longitude" className={styles.formInput} max="180" min="-180" required></input>
                <br></br>
                <label>Latitude</label>
                <br></br>
                <input ref={register} name="lat" type="number" placeholder="Enter latitude" className={styles.formInput} max="90" min="-90" required></input>
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea ref={register} name="description" cols="30" rows="8" placeholder="Here you can describe your trip" className={styles.formInput} required></textarea>
                <br></br>
                <input type="submit" value="Save" className={styles.greenBTN}></input>
                <Link to="/"><button className={styles.orangeBTN}>Cancel</button></Link>


            </form>

            

            <img src={Travelers} alt="traveling people" style={{height:"400px"}}></img>

            </div>
            
            </>
        )
        
    }

export default NewPost;