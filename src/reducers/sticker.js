import { SELECT_STICKER } from '../constants/actionTypes'

const sticker = (state={}, action) => {
  switch (action.type) {
    case SELECT_STICKER:
      return {
        ...state,
        name: action.sticker
      }
    default:
      return state
  }
}

export default sticker
