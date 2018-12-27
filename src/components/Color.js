import React from 'react'

const Color = ({ color, selected, onColorSelect, onModeSelect }) => {
  console.log('COLOR BLOCK PROPS', color, selected)
  const isSelected = selected === color
  const select = color => {
    onColorSelect(color)
    onModeSelect('drawing')
  }
  const style = {
    backgroundColor: `${color}`,
    border: isSelected ? '1px solid white' : ''
  }
  return (
    <div style={style} onClick={() => select(color)} className={`${color} colorblock`}></div>
  )
}

export default Color
