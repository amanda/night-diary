import React from 'react'
import Color from './Color'
import { COLORS_PRIMARY, COLORS_PASTEL, COLORS_BOLD, COLORS_OFF } from '../constants/colors'
import rightArrow from '../img/menu_arrow_right.png'
import leftArrow from '../img/menu_arrow_left.png'

const ColorPicker = ({ selected, onColorSelect, onModeSelect, onColorPage, currentColorPage }) => {
  let currentColors
  switch (currentColorPage) {
    case 1:
      currentColors = COLORS_PRIMARY
      break
    case 2:
      currentColors = COLORS_PASTEL
      break
    case 3:
      currentColors = COLORS_BOLD
      break
    case 4:
      currentColors = COLORS_OFF
      break
    default:
      currentColors = COLORS_PRIMARY
  }
  const colorblocks = currentColors.map((colorRow, index) =>
    <div className="color-row" key={index}>
      {colorRow.map(color =>
        <Color className='colorblock'
        key={color}
        color={color}
        selected={selected}
        onColorSelect={onColorSelect}
        onModeSelect={onModeSelect} />
        )
      }
    </div>
  )
  return (
    <div className="picker color-picker">
      <img src={leftArrow} alt="left" className="arrow left-arrow" onClick={() => onColorPage('down')} />
      {colorblocks}
      <img src={rightArrow} alt="right" className="arrow right-arrow" onClick={() => onColorPage('up')} />
    </div>
  )
}

export default ColorPicker
