import { SELECT_STICKER } from '../constants/actionTypes'

const sticker = (state={}, action) => {
  console.log('sticker reducer called!', action)
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
