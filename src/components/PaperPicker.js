import React from 'react'
import rightArrow from '../img/menu_arrow_right.png'
import leftArrow from '../img/menu_arrow_left.png'
import grid from '../img/papertype_grid.png'
import lined from '../img/papertype_lined.png'
import pinkline from '../img/papertype_linedwpink.png'
import blank from '../img/papertype_blank.png'

const PaperPicker = ({ selected, onPaperSelect, onModeSelect, onPaperPage, currentPaperPage }) => {
  let img
  switch (currentPaperPage) {
    case 1:
      img = blank
      break
    case 2:
      img = grid
      break
    case 3:
      img = lined
      break
    case 4:
      img = pinkline
      break
    default:
      img =  blank
  }
  return (
    <div className="paper-picker-container">
      <img src={leftArrow} alt="right" className="arrow left-arrow" onClick={() => onPaperPage('down')} />
      <div className="picker paper-picker">
        {<img src={img} alt="paper" className="paper-type-selector" />}
      </div>
      <img src={rightArrow} alt="right" className="arrow right-arrow" onClick={() => onPaperPage('up')} />
    </div>
  )
}

export default PaperPicker
