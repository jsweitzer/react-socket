
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, subscribeToData, subscribeToCharts } from './Api';
import { HeimdallChart } from './HeimdallChart';
import { Panel } from './Panel';
import {Frame} from './Frame';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState(
        { 
          timestamp   
        }
      )
    );
  }
  state = {
    timestamp: '-'            
  };
  render() {
    return (
      <div className="App">
        <Frame />
      </div>
    );
  }
}
export default App;
