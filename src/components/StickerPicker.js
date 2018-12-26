import React from 'react'
import Sticker from './Sticker'
import { STICKERS } from '../constants/stickerNames'

const StickerPicker = ({ selected, onStickerSelect }) => {
  const selectedSticker = selected.sticker || ''
  const stickers = STICKERS.map((sticker, index) =>
    <Sticker key={index} name={sticker} selected={selectedSticker} onStickerSelect={onStickerSelect} />
  )
  return <div className="sticker-picker">{stickers}</div>
}

export default StickerPicker
