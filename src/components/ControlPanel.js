import React from 'react'
import StickerPicker from './StickerPicker'
import ColorPicker from './ColorPicker'

const ControlPanel = ({ selectedColor, selectedMode, selectedSticker,
  onColorSelect, onModeSelect, onStickerSelect, onStickerPage, onColorPage,
  currentStickerPage, currentColorPage }) => {
  return (
    <div className="control-panel">
      <div className="control control-left">
        <ColorPicker
          selected={selectedColor}
          onColorSelect={onColorSelect}
          onModeSelect={onModeSelect}
          onColorPage={onColorPage}
          currentColorPage={currentColorPage} />
      </div>
      <div className="control control-right">
        <StickerPicker
          selected={selectedSticker}
          onStickerSelect={onStickerSelect}
          onModeSelect={onModeSelect}
          onStickerPage={onStickerPage}
          currentStickerPage={currentStickerPage} />
      </div>
    </div>
  )
}

export default ControlPanel
