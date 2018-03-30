import React, { PropTypes as T } from 'react'
import ReactDOM from 'react-dom'

import {ScriptCache as cache, GoogleApi} from '../js'

const defaultMapConfig = {}
const style = {
      width: '100vw',
      height: '100vh'
    }
export default class Wrapper extends React.Component {
  get apiKey() {return this.props.apiKey;}
  get libraries() {return this.props.libraries || ['places'];}

  constructor(props, context) {
    super(props, context);

    this.state = {
      loaded: false,
      map: null,
      google: null
    }
  }

  componentWillMount() {
    this.scriptCache = cache({
      google: GoogleApi({
        apiKey: this.apiKey,
        libraries: this.libraries,
      })
    });
  }

  componentDidMount() {
    const refs = this.refs;
    this.scriptCache.google.onLoad((err, tag) => {
      const maps = window.google.maps;
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded
      });

      const mapRef = refs.map;

      const node = ReactDOM.findDOMNode(mapRef);
      let center = new maps.LatLng(this.props.lat, this.props.lng)

      let mapConfig = Object.assign({}, defaultMapConfig, {
        center, zoom: this.props.zoom
      })

      this.map = new maps.Map(node, mapConfig);

      this.setState({
        loaded: true,
        map: this.map,
        google: window.google
      })
    });
  }


  render() {
    const props = Object.assign({}, this.props, {
      loaded: this.state.loaded,
      map: this.state.map,
      google: this.state.google,
      mapComponent: this.refs.map
    })
    return (
      <div>
        <div ref='map' style={style}/>
      </div>
    )
  }
}
