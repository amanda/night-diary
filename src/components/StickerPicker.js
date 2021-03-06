import React from 'react'
import Sticker from './Sticker'
import { STICKERS_PAGEONE } from '../constants/stickerNames'
import { STICKERS_PAGETWO } from '../constants/stickerNames'
import { STICKERS_PAGETHREE } from '../constants/stickerNames'
import rightArrow from '../img/menu_arrow_right.png'
import leftArrow from '../img/menu_arrow_left.png'

const StickerPicker = ({ selected, onStickerSelect, onModeSelect, onStickerPage, currentStickerPage }) => {
  let currentStickers
  switch (currentStickerPage) {
    case 1:
      currentStickers = STICKERS_PAGEONE
      break
    case 2:
      currentStickers = STICKERS_PAGETWO
      break
    case 3:
      currentStickers = STICKERS_PAGETHREE
      break
    default:
      currentStickers = STICKERS_PAGEONE
  }
  const stickers = currentStickers.map((stickerRow, index) =>
    <div className="sticker-row" key={index}>
      {stickerRow.map((sticker, ind) =>
        <Sticker key={sticker + index} name={sticker} selected={selected} onStickerSelect={onStickerSelect} onModeSelect={onModeSelect}/>
      )}
    </div>
  )
  return (
    <div className="sticker-picker-container">
      <img src={leftArrow} alt="right" className="arrow left-arrow" onClick={() => onStickerPage('down')} />
      <div className="picker sticker-picker">
        {stickers}
      </div>
      <img src={rightArrow} alt="right" className="arrow right-arrow" onClick={() => onStickerPage('up')} />
    </div>
  )
}

export default StickerPicker
