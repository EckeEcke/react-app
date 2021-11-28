import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Travelers from "./Images/travelers.svg";
import { Link, useHistory } from 'react-router-dom';
import styles from "./modules/newpost.module.css";
import countries from "./Data/countries.json";
import Loading from "./Loading";


function NewPost() {
    
    const [selectedCountry, setSelectedCountry] = useState('')
    const [isLoading, setLoading] = useState(false)

    let history = useHistory();

    const selectCountry = (event) => {
        setSelectedCountry(event.target.value)
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        setLoading(true)
        let formData = data
        try {
            const geoData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${data.city},${data.country}&appid=12db1a8a1d383d8d3c7fe1910c723599`)
                                .then(response => response.json())
            formData.lat = geoData[0].lat
            formData.lng = geoData[0].lon
            post(formData)
        } catch (error) {
            setLoading(false)
            alert("Location not found. Please try again.")
        }
    }    

    const post = data => {
                    console.log(data);
                    fetch('https://blogbackend-by-chris.herokuapp.com/new', {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ data })
                    })
                    .then(setTimeout(function(){
                        setLoading(false)
                        history.push("/")},2000))
                    .catch(function(error) {
                        setLoading(false)
                        console.log(error);
                    });
                }




        return(
            <>
            {isLoading && 
                <Loading />
            }

            {!isLoading &&
            <>
            <div className={styles.wrapper}>
            

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            
            <h2>Create new blog entry</h2>
                <label>Title</label>
                <br></br>
                <input ref={register} name="title" className={styles.formInput} type="text" placeholder="Enter a title for your post" maxLength="28" required></input>
                
                <br></br>
                <label>Your name</label>
                <br></br>
                <input ref={register} name="author" className={styles.formInput} type="text" placeholder="Enter your name" required></input>
                
                <br></br>
                <label>Country</label>
                <br></br>
                <select ref={register} name="country" className={styles.formInput} type="text" placeholder="Enter country" value={selectedCountry} onChange={(event) => selectCountry(event)} required>
                    {Object.keys(countries).map((country, index) => (
                        <option key={countries[country]} value={country}>
                            {countries[country]}
                        </option>
                    ))}
                </select>
                  
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
                <input ref={register} name="image" type="url" placeholder="Enter an image link (optional)" className={styles.formInput}></input>
                
                <br></br>
                <label>Portrait Link</label>
                <br></br>
                <input ref={register} name="portrait" type="url" placeholder="Enter link to portrait (optional)" className={styles.formInput}></input>
                
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea ref={register} name="description" cols="30" rows="8" placeholder="Here you can describe your trip" className={styles.formInput} required></textarea>
                
                <br></br>
                <button type="submit" value="Save" className={styles.greenBTN}>Save</button>
                <Link to="/"><button className={styles.orangeBTN}>Cancel</button></Link>


            </form>

            

            <img src={Travelers} alt="traveling people" style={{height:"400px"}}></img>

            </div>
            </>
        }
        </>
    )
        
}

export default NewPost;