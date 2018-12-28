import React from 'react'
import Color from './Color'
import { COLORS } from '../constants/colors'

const ColorPicker = ({ selected, onColorSelect, onModeSelect }) => {
  const colorblocks = COLORS.map((color, index) =>
    <Color className='colorblock' key={index} color={color} selected={selected} onColorSelect={onColorSelect} onModeSelect={onModeSelect} />
  )
  return <div className="color-picker">{colorblocks}</div>
}

export default ColorPicker
