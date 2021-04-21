import React from 'react';

/*function Car() {
  return (
    <div>
      <h1>Test for Valera</h1>
      <h2>Test for Vasya</h2>
    </div>
  )
}*/

/*const car = () => {
  return (
    <div>
      <h1>Valeeeeera</h1>
      <h2>Vasya</h2>
      <p>Test</p>
    </div>
  )
}*/

/*const car = () => (
  <div>
    <h1>Valeeeeera</h1>
    <p>Test</p>
  </div>
)

export default car*/

// eslint-disable-next-line import/no-anonymous-default-export
/*export default () => (
  <div>
    <h1>Valeeeeera</h1>
    <p>Test</p>
    <h3>Test for export simple function</h3>
    <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
  </div>
)*/

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div>
    <h1>Car name: {props.name}</h1>
    <p>Year: <strong>{props.year}</strong></p>
    { props.children }
  </div>
)
