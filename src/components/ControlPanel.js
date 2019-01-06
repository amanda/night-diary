import React from 'react'
import StickerPicker from './StickerPicker'
import ColorPicker from './ColorPicker'
import FontPicker from './FontPicker'
// import PaperPicker from './PaperPicker'

// TODO:
// <div className="control paper-picker-control">
//   <PaperPicker
//     selected={selectedPaper}
//     onPaperSelect={onPaperSelect}
//     onPaperPage={onPaperPage}
//     currentPaperPage={currentPaperPage} />
// </div>

const ControlPanel = ({ selectedColor, selectedMode, selectedSticker,
  selectedFont, selectedPaper,
  onColorSelect, onModeSelect, onStickerSelect, onFontSelect, onPaperSelect,
  onStickerPage, onColorPage, onFontPage, onPaperPage,
  currentStickerPage, currentColorPage, currentFontPage, currentPaperPage }) => {

  return (
    <div className="control-panel">
      <div className="control-left">
        <div className="">
          <div className="control color-picker-control">
            <ColorPicker
              selected={selectedColor}
              onColorSelect={onColorSelect}
              onModeSelect={onModeSelect}
              onColorPage={onColorPage}
              currentColorPage={currentColorPage} />
          </div>
        </div>
        <div className="control font-picker-control">
          <FontPicker
            selected={selectedFont}
            onFontSelect={onFontSelect}
            onModeSelect={onModeSelect}
            onFontPage={onFontPage}
            currentFontPage={currentFontPage} />
        </div>
      </div>
      <div className="control control-right sticker-picker-control">
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
