import React from 'react'
import moon from '../img/sticker_moon.png'

const Sticker = ({ name, isSelected, onStickerSelect }) => {
  let img
  switch (name) {
    case 'moon':
      img = moon
      break
    default:
      img = ''
  }
  return (
    <div onClick={() => onStickerSelect(name)} className={`${name} sticker`}><img src={img} alt={name} /></div>
  )
}

export default Sticker
