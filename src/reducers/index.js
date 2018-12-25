import { combineReducers } from 'redux'
import mode from './mode'
import sticker from './sticker'
import color from './color'

export default combineReducers({
  mode,
  sticker,
  color
})
