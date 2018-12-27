import React from 'react'
import { connect } from 'react-redux'
import { selectMode, selectColor, selectSticker } from '../actions'
import ControlPanel from '../components/ControlPanel'

const ControlsContainer = ({ selectedColor, selectedMode, selectedSticker,
  selectMode, selectColor, selectSticker }) => {
  return (
  <ControlPanel
    selectedColor={selectedColor}
    selectedMode={selectedMode}
    selectedSticker={selectedSticker}
    onColorSelect={selectColor}
    onModeSelect={selectMode}
    onStickerSelect={selectSticker}
     />
   )
}

const mapStateToProps = state => ({
  selectedColor: state.color.name || '#FFFFFF',
  selectedMode: state.mode.name || 'drawing',
  selectedSticker: state.sticker.name || 'moon'
})

const mapDispatchToProps = {
  selectMode,
  selectColor,
  selectSticker
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlsContainer)
