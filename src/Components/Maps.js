import React, {Component, useState } from "react";
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import { Link, BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons'





export class MapContainer extends Component {

  


    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
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
      console.log();
      return (

        
      

        <Map 
        
            google={this.props.google}
            onClick={this.onMapClicked}
            style={{width:"700px", maxWidth: "100%", height:"100%", maxHeight: "700px"}}
            zoom={this.props.zoom}
            initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
            containerStyle={{width: "100%", maxWidth: '700px', maxHeight: "100%" }}>

            
            <Marker onClick={this.onMarkerClick}
            title={this.props.title} 
            image={this.props.image}
            author={"Chris"}
            date={this.props.date}
            />

            {this.props.entries && 
              this.props.entries.map((entry, index) => 
                  
                  <Marker

  

                  onClick={this.onMarkerClick}
                  name={entry.title}
                  id={index+1}
                  position={{ lat: entry.lat, lng: entry.lng }}
                  title={entry.title}
                  image={entry.portrait}
                  author={entry.author}
                  date={entry.date}
                  />

                 
                  )}
            
          
            
            <InfoWindow

              marker={this.state.activeMarker}

              visible={this.state.showingInfoWindow}>
                <div>
                <img src={this.state.activeMarker.image} alt="Chris" style={{width:"80px", height:"80px", display:"block", margin:"10px auto", objectFit:"cover", borderRadius: "50%", verticalAlign:"middle"}}></img>
                  <h2>{this.state.activeMarker.title}</h2>
                  
                  <p style={{fontSize:"1.1em"}}>
  
                  <FontAwesomeIcon icon={faUser} style={{marginRight:"5px"}}  />  {this.state.activeMarker.author}
                   <br></br>
                   <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight:"5px"}}  /> {this.state.activeMarker.date}

                    <br></br>
                    
                    

                    </p>
                    
                    {this.state.activeMarker.id && <BrowserRouter><Link to={`/Details/${this.state.activeMarker.id}`} style={{float:"right"}}><button style={{marginTop:"10px", padding: "8px", backgroundColor: "#32CD32", borderStyle: "none", borderRadius:"20px", width:"90px", color: "white"}}>Read more</button></Link></BrowserRouter>}

                </div>
              </InfoWindow>
            
            
          
                  
   
        </Map>
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAPS_KEY)
  })(MapContainer)