import React from 'react'
import { connect } from 'react-redux'
import { selectMode, selectColor, selectSticker, stickerPage, colorPage } from '../actions'
import ControlPanel from '../components/ControlPanel'

const ControlsContainer = ({ selectedColor, selectedMode, selectedSticker,
  selectMode, selectColor, selectSticker, stickerPage, colorPage,
  currentColorPage, currentStickerPage }) => {
  return (
  <ControlPanel
    selectedColor={selectedColor}
    selectedMode={selectedMode}
    selectedSticker={selectedSticker}
    onColorSelect={selectColor}
    onModeSelect={selectMode}
    onStickerSelect={selectSticker}
    onStickerPage={stickerPage}
    onColorPage={colorPage}
    currentStickerPage={currentStickerPage}
    currentColorPage={currentColorPage} />
   )
}

const mapStateToProps = state => ({
  selectedColor: state.color.name || '#FFFFFF',
  selectedMode: state.mode.name || 'drawing',
  selectedSticker: state.sticker.name || 'moon',
  currentStickerPage: state.sticker.page || 1,
  currentColorPage: state.color.page || 1,
})

const mapDispatchToProps = {
  selectMode,
  selectColor,
  selectSticker,
  stickerPage,
  colorPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlsContainer)
