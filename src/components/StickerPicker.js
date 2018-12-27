import React from 'react'
import Sticker from './Sticker'
import { STICKERS } from '../constants/stickerNames'

const StickerPicker = ({ selected, onStickerSelect, onModeSelect }) => {
  const selectedSticker = selected
  const stickers = STICKERS.map((sticker, index) =>
    <Sticker key={index} name={sticker} selected={selectedSticker} onStickerSelect={onStickerSelect} onModeSelect={onModeSelect}/>
  )
  return <div className="sticker-picker">{stickers}</div>
}

export default StickerPicker
