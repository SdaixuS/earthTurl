import React, { Component } from 'react';
import {GoogleApiComponent} from '../js';

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return <div>place here</div>
  }
};

export default GoogleApiComponent({
  apiKey: 'AIzaSyAKzVA8a9TDIcizJS3jA47HMMzwbXY4MuU'
})(SimpleMap)
