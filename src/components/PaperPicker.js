import React from 'react'
import rightArrow from '../img/menu_arrow_right.png'
import leftArrow from '../img/menu_arrow_left.png'
import grid from '../img/papertype_grid.png'
import lined from '../img/papertype_lined.png'
import pinkline from '../img/papertype_linedwpink.png'
import blank from '../img/papertype_blank.png'
import * as paperTypes from '../constants/paperTypes'

const PaperPicker = ({ selected, onPaperSelect, onModeSelect, onPaperPage, currentPaperPage }) => {
  let img
  let paper
  switch (currentPaperPage) {
    case 1:
      img = blank
      paper = paperTypes.BLANK
      break
    case 2:
      img = grid
      paper = paperTypes.GRID
      break
    case 3:
      img = lined
      paper = paperTypes.LINES
      break
    case 4:
      img = pinkline
      paper = paperTypes.PINK
      break
    default:
      img =  blank
      paper = paperTypes.BLANK
  }
  return (
    <div className="paper-picker-container">
      <img src={leftArrow} alt="right" className="arrow left-arrow" onClick={() => onPaperPage('down')} />
      <div className="picker paper-picker" onClick={() => onPaperSelect(paper)}>
        <img src={img} alt="paper" className="paper-type-selector" />
      </div>
      <img src={rightArrow} alt="right" className="arrow right-arrow" onClick={() => onPaperPage('up')} />
    </div>
  )
}

export default PaperPicker
