import React, { Component } from 'react'
import Canvas from './Canvas'

class Notebook extends Component {
  render() {
    const { selectedColor, selectedMode, selectedSticker, selectedFont, selectedPaper } = this.props
    return (
      <div className="notebook">
        <Canvas color={selectedColor} sticker={selectedSticker}
          mode={selectedMode} paper={selectedPaper} font={selectedFont} />
      </div>
    )
  }
}

export default Notebook
