import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SimpleMap,MapWrapper} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MapWrapper {...{
          apiKey: 'AIzaSyAKzVA8a9TDIcizJS3jA47HMMzwbXY4MuU',
          lat: 60,
          lng: 30,
          zoom: 11,
        }}
        />
      </div>
    );
  }
}

export default App;
