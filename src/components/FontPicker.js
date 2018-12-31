import React from 'react'
// import { CURSIVE } from '../constants/colors'
import rightArrow from '../img/menu_arrow_right.png'
import leftArrow from '../img/menu_arrow_left.png'
import * as modeTypes from '../constants/journalModes'

const FontPicker = ({ selected, onFontSelect, onModeSelect, onFontPage, currentFontPage }) => {
  let currentFont
  switch (currentFontPage ) {
    case 1:
      currentFont = <div>CURSIVE</div>
      break
    case 2:
      currentFont = <div>PLAIN</div>
      break
    default:
      currentFont = <div>CURSIVE</div>
  }
  return (
    <div className="picker color-picker" onClick={() => onModeSelect(modeTypes.TYPING)}>
      <img src={leftArrow} alt="left" className="arrow left-arrow" onClick={() => onFontPage('down')} />
      {currentFont}
      <img src={rightArrow} alt="right" className="arrow right-arrow" onClick={() => onFontPage('up')} />
    </div>
  )
}

export default FontPicker
