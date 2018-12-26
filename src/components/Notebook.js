import React, { Component } from 'react'
import notebook from '../img/notebookcanvas.png'


class Notebook extends Component {
  render() {
    return (
      <div className="notebook">
        <img src={notebook} alt="notebook" />
      </div>
    )
  }
}

export default Notebook
