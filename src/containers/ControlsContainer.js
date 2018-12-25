import React from 'react'
import { connect } from 'react-redux'
import { selectMode, selectColor, selectSticker } from '../actions'
import ControlPanel from '../components/ControlPanel'
import _get from 'lodash.get'

const ControlsContainer = ({ selectedColor, selectedMode, selectedSticker }) => (
  <ControlPanel
    selectedColor={selectedColor}
    selectedMode={selectedMode}
    selectedSticker={selectedSticker} />
)

const mapStateToProps = state => ({
  selectedColor: _get(state, 'color', ''),
  selectedMode: _get(state, 'mode', ''),
  selectedSticker: _get(state, 'sticker', '')
})

export default connect(
  mapStateToProps,
  { selectMode, selectColor, selectSticker }
)(ControlsContainer)
