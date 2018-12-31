import { combineReducers } from 'redux'
import mode from './mode'
import sticker from './sticker'
import color from './color'
import font from './font'
import paper from './paper'

export default combineReducers({
  sticker,
  color,
  mode,
  font,
  paper
})
