import React, { Component } from 'react';

import './assets/scss/styles.scss';
import WebContent from './Component/Module';

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
