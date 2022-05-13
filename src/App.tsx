import React, { Component } from 'react';
import WebContent from './Component/Module';
import './assets/scss/styles.scss';

class App extends Component {
  render() {
    return(
      <div className="web-wrapper">
          <WebContent />
      </div>
    );
  }
}

export default App;
