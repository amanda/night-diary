import React, { Component } from 'react'
import './App.css'

import NotebookContainer from './containers/NotebookContainer'
import ControlsContainer from './containers/ControlsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        hi
        <NotebookContainer />
        <ControlsContainer />
      </div>
    )
  }
}

export default App
