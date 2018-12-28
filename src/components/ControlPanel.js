import React from 'react'
import StickerPicker from './StickerPicker'
import ColorPicker from './ColorPicker'

const ControlPanel = ({ selectedColor, selectedMode, selectedSticker,
  onColorSelect, onModeSelect, onStickerSelect }) => {
  return (
    <div className="control-panel">
      <div className="control control-left">
        <ColorPicker selected={selectedColor} onColorSelect={onColorSelect} onModeSelect={onModeSelect} />
      </div>
      <div className="control control-right">
        <StickerPicker selected={selectedSticker} onStickerSelect={onStickerSelect} onModeSelect={onModeSelect} />
      </div>
    </div>
  )
}

export default ControlPanel
