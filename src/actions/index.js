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

export const selectFont = font => ({
  type: types.SELECT_FONT,
  font
})

export const selectPaper = paper => ({
  type: types.SELECT_PAPER,
  paper
})

export const stickerPage = direction => ({
  type: types.STICKER_PAGE,
  direction
})

export const colorPage = direction => ({
  type: types.COLOR_PAGE,
  direction
})

export const fontPage = direction => ({
  type: types.FONT_PAGE,
  direction
})

export const paperPage = direction => ({
  type: types.PAPER_PAGE,
  direction
})
