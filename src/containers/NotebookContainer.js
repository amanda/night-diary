import React from 'react'
import { connect } from 'react-redux'
import Notebook from '../components/Notebook'

const NotebookContainer = ({ selectedColor, selectedMode,
  selectedSticker, selectedFont, selectedPaper }) => (
    <Notebook
      selectedColor={selectedColor}
      selectedMode={selectedMode}
      selectedSticker={selectedSticker}
      selectedFont={selectedFont}
      selectedPaper={selectedPaper}
    />
  )

const mapStateToProps = state => ({
  selectedColor: state.color.name || '#FFFFFF',
  selectedMode: state.mode.name || 'drawing',
  selectedSticker: state.sticker.name || 'moon',
  selectedFont: state.font.name || 'plain',
  selectedPaper: state.paper.name || 'plain'
})

export default connect(
  mapStateToProps,
)(NotebookContainer)
