import React from 'react'
import rightArrow from '../img/menu_arrow_right.png'
import leftArrow from '../img/menu_arrow_left.png'
import * as modeTypes from '../constants/journalModes'
import * as fonts from '../constants/fonts'

const FontPicker = ({ selected, onFontSelect, onModeSelect, onFontPage, currentFontPage }) => {
  let font
  let fontName
  switch (currentFontPage ) {
    case 1:
      font = fonts.getFont(fonts.CURSIVE)
      fontName = fonts.CURSIVE
      break
    case 2:
      font = fonts.getFont(fonts.PLAIN)
      fontName = fonts.PLAIN
      break
    case 3:
      font = fonts.getFont(fonts.ROBOT)
      fontName = fonts.ROBOT
      break
    default:
      font = fonts.getFont(fonts.PLAIN)
      fontName = fonts.PLAIN
    break
  }
  const style = {
    fontFamily: `${font}`
  }
  return (
    <div className="picker color-picker" onClick={() => onModeSelect(modeTypes.TYPING)}>
      <img src={leftArrow} alt="left" className="arrow left-arrow" onClick={() => onFontPage('down')} />
        <div className="font-selector" style={style} onClick={() => onFontSelect(fontName)}>abcdefghijklmno</div>
      <img src={rightArrow} alt="right" className="arrow right-arrow" onClick={() => onFontPage('up')} />
    </div>
  )
}

export default FontPicker
