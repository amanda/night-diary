import React from 'react'

const Color = ({ color, selected, onColorSelect, onModeSelect }) => {
  const isSelected = selected === color
  const select = color => {
    onColorSelect(color)
    onModeSelect('drawing')
  }
  const style = {
    backgroundColor: `${color}`,
    border: isSelected ? '.3em solid yellow' : ''
  }
  return (
    <div style={style} onClick={() => select(color)} className={`${color} colorblock`}></div>
  )
}

export default Color
