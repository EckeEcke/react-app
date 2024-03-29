import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import { Link, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from "./modules/maps.module.css";






export class MapContainer extends Component {

  


    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      entries: [],
    };
   

    componentDidMount() {
      fetch("https://travel-blog-backend-9hik.onrender.com")
        .then(response => response.json())
        .then(data => this.setState({ 
          entries: data} ))
        .catch(function(error) {
          console.log(error);
        });
        
    }



    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });


    onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
    };
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,

        })
      }
    };


   
    render(props) {

      return (

        
      <>

        {this.state.entries.length>0 &&
        <Map 

            
            google={this.props.google}
            onClick={this.onMapClicked}
            style={{width:"700px", maxWidth: "100%", height:"100%", maxHeight: "700px"}}
            zoom={this.props.zoom}
            initialCenter={{ lat: this.state.entries[this.props.id-1].lat, lng: this.state.entries[this.props.id-1].lng }}
            containerStyle={{width: "700px", maxWidth: '100%', maxHeight: "100%" }}>
          
        
            

            {this.state.entries.length>0 &&
            <Marker onClick={this.onMarkerClick}
              title={this.state.entries[this.props.id-1].title} 
              image={this.state.entries[this.props.id-1].portrait}
              author={this.state.entries[this.props.id-1].author}
              date={this.state.entries[this.props.id-1].date}
            />
            }


            {this.state.entries.length>0 && 
              this.state.entries.map((entry, index) => 
                  
                  <Marker
                    onClick={this.onMarkerClick}
                    name={entry.title}
                    id={index+1}
                    position={{ lat: entry.lat, lng: entry.lng }}
                    title={entry.title}
                    image={entry.portrait}
                    author={entry.author}
                    date={entry.date}
                    key={index+1}
                  />

                 
                  )}
            
          
            
            <InfoWindow

              marker={this.state.activeMarker}

              visible={this.state.showingInfoWindow}>
                <div>
                <img src={this.state.activeMarker.image} 
                     onError={(e)=>{e.target.onerror = null; e.target.src="https://jugendbildungsmesse.de/wp-content/uploads/2017/07/jugendbildungsmesse-work-and-travel-reisen.jpg"}}
                     alt="author" className={styles.infoPortrait}>
                </img>
                  <h2>{this.state.activeMarker.title}</h2>
                  
                  <p style={{fontSize:"1.1em"}}>
  
                    <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}}  />  {this.state.activeMarker.author}
                   
                    <br></br>
                  
                    <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight:"5px"}}  /> {this.state.activeMarker.date}

                    <br></br>
                    
                  </p>
                    
                    {this.state.activeMarker.id && 
                    <BrowserRouter>
                      <Link to={`/Details/${this.state.activeMarker.id}`} style={{float:"right"}}>
                        <button className={styles.greenBTN}>Read more</button>
                      </Link>
                    </BrowserRouter>
                    }

                </div>
              </InfoWindow>        
   
        </Map>
        }
       </> 
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAPS_KEY)
  })(MapContainer)