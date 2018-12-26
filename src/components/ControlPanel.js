import React from 'react'
import StickerPicker from './StickerPicker'

// import ColorPicker from './ColorPicker'
// import ModePicker from './ModePicker'

// <ColorPicker selected={selectedColor} />
// <ModePicker selected={selectedMode} />


const ControlPanel = ({ selectedColor, selectedMode, selectedSticker,
  onColorSelect, onModeSelect, onStickerSelect }) => {
  return (
    <div className="control-panel">
      <StickerPicker selected={selectedSticker} onStickerSelect={onStickerSelect} />
    </div>
  )
}

export default ControlPanel
