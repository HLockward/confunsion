import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {MapAPI_KEY} from '../config';

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 18.508218,
      lng: -69.856422
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MapAPI_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={'Here'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;