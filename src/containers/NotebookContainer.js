import React from 'react'
import { connect } from 'react-redux'
import Notebook from '../components/Notebook'

const NotebookContainer = ({ selectedColor, selectedMode, selectedSticker,
  selectMode, selectColor, selectSticker }) => (
    <Notebook
      selectedColor={selectedColor}
      selectedMode={selectedMode}
      selectedSticker={selectedSticker}
    />
  )

const mapStateToProps = state => ({
  selectedColor: state.color.name || '#FFFFFF',
  selectedMode: state.mode.name || 'drawing',
  selectedSticker: state.sticker.name || 'moon'
})

export default connect(
  mapStateToProps,
)(NotebookContainer)
