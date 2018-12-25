import { SELECT_STICKER } from '../constants/actionTypes'

const sticker = (state={}, action) => {
  switch (action.type) {
    case SELECT_STICKER:
      return {
        ...state,
        sticker: action.sticker
      }
    default:
      return state
  }
}

export default sticker
