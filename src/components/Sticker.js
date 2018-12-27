import React from 'react'
import moon from '../img/sticker_moon.png'

const Sticker = ({ name, selected, onStickerSelect, onModeSelect }) => {
  let img
  switch (name) {
    case 'moon':
      img = moon
      break
    default:
      img = ''
  }
  const isSelected = selected === name
  const select = name => {
    onStickerSelect(name)
    onModeSelect('sticker')
  }
  const style = {
    backgroundColor: isSelected ? 'goldenrod' : ''
  }
  return (
    <div style={style} onClick={() => select(name)} className={`${name} sticker`}><img src={img} alt={name} /></div>
  )
}

export default Sticker
