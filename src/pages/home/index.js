import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/home/index.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="scss">scss <span className="scss__test">test</span></div>
        </header>
      </div>
    );
  }
}

export default App;
