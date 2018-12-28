import React, { Component } from 'react'
import Canvas from './Canvas'

class Notebook extends Component {
  render() {
    console.log('notebook props?', this.props)
    const color = this.props.selectedColor
    const mode = this.props.selectedMode
    const sticker = this.props.selectedSticker
    return (
      <div className="notebook">
        <Canvas color={color} sticker={sticker} mode={mode} />
      </div>
    )
  }
}

export default Notebook
