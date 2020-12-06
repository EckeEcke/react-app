import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';




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
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render(props) {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            mapId={"4996d6ed2b7c73a6"}
            style={{width:"700px", maxWidth: "100%", height:"100%", maxHeight: "700px"}}
            zoom={this.props.zoom}
            initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
            containerStyle={{width: "100%", maxWidth: '700px', maxHeight: "100%" }}>

            <Marker /> 
          

          {this.props.entries && 
              this.props.entries.map((entry, index) => 

                     
                  <Marker
                  onClick={this.onMarkerClick}
                  name={entry.title}
                  position={{ lat: entry.lat, lng: entry.lng }}
                  key={index-1}
                  />
                      
                  )}

          
                  
   
        </Map>
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAPS_KEY)
  })(MapContainer)



