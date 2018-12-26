import * as types from '../constants/actionTypes'

export const selectSticker = sticker => ({
  type: types.SELECT_STICKER,
  sticker
})

export const selectMode = mode => ({
  type: types.SELECT_MODE,
  mode
})

export const selectColor = color => ({
  type: types.SELECT_COLOR,
  color
})
