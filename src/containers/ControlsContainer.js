import React from 'react'
import { connect } from 'react-redux'
import { selectMode, selectColor, selectSticker } from '../actions'
import ControlPanel from '../components/ControlPanel'
import _get from 'lodash.get'

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
  selectedColor: _get(state, 'color', ''),
  selectedMode: _get(state, 'mode', ''),
  selectedSticker: _get(state, 'sticker', '')
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
