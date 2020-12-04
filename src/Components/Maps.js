import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';



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
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            mapId={"4996d6ed2b7c73a6"}
            style={{width:"100%", maxWidth: "700px", height: "380px"}}
            zoom={1.2}
            initialCenter={{ lat: 53.551085, lng: 9.993682 }}
            containerStyle={{width: "100%", maxWidth: '700px', maxHeight: '380px' }}>
          
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
        </Map>
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAPS_KEY)
  })(MapContainer)



