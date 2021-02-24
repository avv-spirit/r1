import React, { Component } from 'react';
import './App.css';
import valera from './Car/Car'
import Car from "./Car/Car";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render () {
    const divvStyle = {
        textAlign: 'center',
        outline: '2px solid red',
        fontSize: '20px'
      }

    return (
        <div style={divvStyle} className="App">
          <h1 style={{color: 'red'}}>Valera</h1>
          <Car />
        </div>
    );
  }
}

export default App;
