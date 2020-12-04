import React, {Component} from "react";


export class NewPost extends Component {
    render(){
        return(
            <form>
                <label>Title</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Travel Date</label>
                <br></br>
                <input type="date"></input>
                <br></br>
                <label>Image Link</label>
                <br></br>
                <input type="url"></input>
                <br></br>
                <label>Longitude</label>
                <br></br>
                <input type="number"></input>
                <br></br>
                <label>Latitude</label>
                <br></br>
                <input type="number"></input>
                <br></br>
                <label>Description</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <input type="submit" value="Save"></input>


            </form>

        )
        }
    }

export default NewPost;