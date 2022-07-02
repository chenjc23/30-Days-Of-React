// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    top: 0,
    left: 0,
  }

  handleMouseEnter = (e) => {
    e.preventDefault();
    this.setState({
      top: this.state.top + e.clientY,
      left: this.state.left + e.clientX
    })
  }

  render() {
    const styles = {
      width: 200,
      height:50,
      font: '24px bold',
      backgroundColor: 'deepskyblue',
      position: 'absolute',
      top: this.state.top,
      left: this.state.left
    }

    return <div style={styles} onMouseEnter={this.handleMouseEnter}>30 Days Of React</div>
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)