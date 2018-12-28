import React from 'react'
import Sticker from './Sticker'
import { STICKERS_PAGEONE } from '../constants/stickerNames'
// import { STICKERS_PAGETWO } from '../constants/stickerNames'
// import { STICKERS_PAGETHREE } from '../constants/stickerNames'

const StickerPicker = ({ selected, onStickerSelect, onModeSelect }) => {
  const selectedSticker = selected
  const stickers = STICKERS_PAGEONE.map((sticker, index) =>
    <Sticker key={index} name={sticker} selected={selectedSticker} onStickerSelect={onStickerSelect} onModeSelect={onModeSelect}/>
  )
  return <div className="sticker-picker">{stickers}</div>
}

export default StickerPicker
