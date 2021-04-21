import React, { Component } from 'react';
import './App.css';
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
    const divStyle = {
      backgroundColor: "gray",
      textAlign: 'center',
      outline: '2px solid red',
      fontSize: '20px'
    }

    /*const penStyle = {
      'backgroundColor': "violet",
      'paddingLeft': '20px',
      'textAlign': 'left',
      'outline': '2px solid red',
      'fontSize': '20px'
    }*/

    return (
        <div style={divStyle} className="App">
          <h1 style={{color: 'blue', borderBottom: '1px solid black'}}>Valera</h1>
          <Car name={'Audi'} year={2016}>
            <p style={{color: 'blue'}}>COLOR</p>
          </Car>
          <Car name={'Mercedes-benz'} year={2013}>
            <p style={{color: 'red'}}>COLOR</p>
          </Car>
          <Car name={'Ferrari'} year={2005} />
        </div>
    );
  }
}

export default App;
