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

export const stickerPage = direction => ({
  type: types.STICKER_PAGE,
  direction
})

export const colorPage = direction => ({
  type: types.COLOR_PAGE,
  direction
})
