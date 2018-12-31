import React from 'react'
import { connect } from 'react-redux'
import {
  selectMode,
  selectColor,
  selectSticker,
  selectFont,
  selectPaper,
  stickerPage,
  colorPage,
  fontPage,
  paperPage } from '../actions'
import ControlPanel from '../components/ControlPanel'

const ControlsContainer = ({ selectedColor, selectedMode, selectedSticker,
  selectedFont, selectedPaper,
  selectMode, selectColor, selectSticker, selectFont, selectPaper,
  stickerPage, colorPage, fontPage, paperPage,
  currentColorPage, currentStickerPage, currentFontPage, currentPaperPage }) => {
  return (
  <ControlPanel
    selectedColor={selectedColor}
    selectedMode={selectedMode}
    selectedSticker={selectedSticker}
    selectedFont={selectedFont}
    onColorSelect={selectColor}
    onModeSelect={selectMode}
    onStickerSelect={selectSticker}
    onFontSelect={selectFont}
    onPaperSelect={selectPaper}
    onStickerPage={stickerPage}
    onColorPage={colorPage}
    onFontPage={fontPage}
    onPaperPage={paperPage}
    currentStickerPage={currentStickerPage}
    currentColorPage={currentColorPage}
    currentFontPage={currentFontPage}
    currentPaperPage={currentPaperPage} />
   )
}

const mapStateToProps = state => ({
  selectedColor: state.color.name || '#FFFFFF',
  selectedMode: state.mode.name || 'drawing',
  selectedSticker: state.sticker.name || 'moon',
  selectedFont: state.font.name || 'cursive',
  selectedPaper: state.paper.name || 'blank',
  currentStickerPage: state.sticker.page || 1,
  currentColorPage: state.color.page || 1,
  currentFontPage: state.font.page || 1,
  currentPaperPage: state.paper.page || 1
})

const mapDispatchToProps = {
  selectMode,
  selectColor,
  selectSticker,
  selectFont,
  selectPaper,
  stickerPage,
  colorPage,
  fontPage,
  paperPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlsContainer)
