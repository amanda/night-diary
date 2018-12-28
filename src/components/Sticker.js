import React from 'react'
import { getImg } from '../constants/stickerNames'

const Sticker = ({ name, selected, onStickerSelect, onModeSelect }) => {
  const img = getImg(name)
  const isSelected = selected === name
  const select = name => {
    onStickerSelect(name)
    onModeSelect('sticker')
  }
  const style = {
    border: isSelected ? '.1em solid yellow' : '',
    borderRadius: '10em'
  }
  return (
    <div style={style} onClick={() => select(name)} className={`${name} sticker`}><img src={img} alt={name} /></div>
  )
}

export default Sticker
