import React from 'react'
import StickerPicker from './StickerPicker'
import ColorPicker from './ColorPicker'

const ControlPanel = ({ selectedColor, selectedMode, selectedSticker,
  onColorSelect, onModeSelect, onStickerSelect }) => {
  return (
    <div className="control-panel">
      <StickerPicker selected={selectedSticker} onStickerSelect={onStickerSelect} onModeSelect={onModeSelect} />
      <ColorPicker selected={selectedColor} onColorSelect={onColorSelect} onModeSelect={onModeSelect} />
    </div>
  )
}

export default ControlPanel
