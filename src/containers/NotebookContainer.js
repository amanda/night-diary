import React from 'react'
import { connect } from 'react-redux'
import Notebook from '../components/Notebook'
import _get from 'lodash.get'

const NotebookContainer = ({ selectedColor, selectedMode, selectedSticker,
  selectMode, selectColor, selectSticker }) => {
  return (
  <Notebook
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

export default connect(
  mapStateToProps,
)(NotebookContainer)
