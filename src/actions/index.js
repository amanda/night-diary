import * as types from '../constants/actionTypes'

const selectStickerCreator = sticker => ({
  type: types.SELECT_STICKER,
  sticker
})

const selectModeCreator = mode => ({
  type: types.SELECT_MODE,
  mode
})

const selectColorCreator = color => ({
  type: types.SELECT_COLOR,
  color
})

export const selectSticker = sticker => dispatch => {
  dispatch(selectStickerCreator(sticker))
}

export const selectMode = mode => dispatch => {
  dispatch(selectModeCreator(mode))
}

export const selectColor = color => dispatch => {
  dispatch(selectColorCreator(color))
}
