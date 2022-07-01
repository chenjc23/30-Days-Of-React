import React from 'react'
import ReactDOM from 'react-dom'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const color = hexaColor();
  const hStyle = {
    backgroundColor: color,
    marginBottom: 5,
    padding: 5,
    textAlign: 'center',
  };
  return <div style={hStyle}>{color}</div>
}

let compArr = [];
for (let i = 0; i < 6; i++) {
  compArr.push(<HexaColor />);
}

const ColorBlock = () => <div>{compArr}</div>

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<ColorBlock />, rootElement)