import React, { Component } from 'react'
import { getImg } from '../constants/stickerNames'
import * as modeTypes from '../constants/journalModes'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.endPaintEvent = this.endPaintEvent.bind(this)
  }

  isPainting = false
  line = []
  prevPos = { offsetX: 0, offsetY: 0 }

  onMouseDown({ nativeEvent }) {
    console.log(nativeEvent)
    const { offsetX, offsetY, x, y } = nativeEvent
    if (this.props.mode === modeTypes.DRAWING) {
      console.log('drawin')
      this.isPainting = true
      this.prevPos = { offsetX, offsetY }
    }
    if (this.props.mode === modeTypes.STICKER) {
      console.log('sticker down')
      const sticker = this.props.sticker
      let img = new Image()
      img.src = getImg(sticker)
      this.ctx.drawImage(img, offsetX, offsetY)
    }
    if (this.props.mode === modeTypes.TYPING) {
      const $text = document.createElement('input')
      $text.type = 'input'
      const $cnvs = document.querySelector('.notebook')
      console.log($cnvs)
      $text.className = 'typing-area'
      $text.style.top = y + 'px';
      $text.style.left = x     + 'px';
      $cnvs.appendChild($text)
      $text.focus()
    }
  }

  onMouseMove({ nativeEvent }) {
    if (this.isPainting) {
      const { offsetX, offsetY } = nativeEvent
      const offSetData = { offsetX, offsetY }
      // Set the start and stop position of the paint event.
      const positionData = {
        start: { ...this.prevPos },
        stop: { ...offSetData },
      }
      // Add the position to the line array
      this.line = this.line.concat(positionData)
      this.paint(this.prevPos, offSetData, this.props.color)
    }
  }

  endPaintEvent() {
    if (this.isPainting) {
      this.isPainting = false
    }
  }

  paint(prevPos, currPos, strokeStyle) {
    const { offsetX, offsetY } = currPos
    const { offsetX: x, offsetY: y } = prevPos

    this.ctx.beginPath()
    this.ctx.strokeStyle = strokeStyle
    // Move the the prevPosition of the mouse
    this.ctx.moveTo(x, y)
    // Draw a line to the current position of the mouse
    this.ctx.lineTo(offsetX, offsetY)
    // Visualize the line using the strokeStyle
    this.ctx.stroke()
    this.prevPos = { offsetX, offsetY }
  }

  componentDidMount() {
    // Here we set up the properties of the canvas element.
    this.canvas.width = 650
    this.canvas.height = 420
    this.ctx = this.canvas.getContext('2d')
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.lineWidth = 5
  }

  render() {
    return (
      <canvas
        // We use the ref attribute to get direct access to the canvas element.
        ref={(ref) => (this.canvas = ref)}
        onMouseDown={this.onMouseDown}
        onMouseLeave={this.endPaintEvent}
        onMouseUp={this.endPaintEvent}
        onMouseMove={this.onMouseMove}
      />
    )
  }
}
export default Canvas
