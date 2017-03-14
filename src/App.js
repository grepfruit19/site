import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Portfolio";
  }
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
