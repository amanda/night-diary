import { SELECT_STICKER, STICKER_PAGE } from '../constants/actionTypes'

const sticker = (state={name: '', page: 1}, action) => {
  switch (action.type) {
    case SELECT_STICKER:
      return {
        ...state,
        name: action.sticker
      }
    case STICKER_PAGE:
      const dir = action.direction
      if (dir === 'up' && state.page < 3) {
        return {
          ...state,
          page: state.page + 1
        }
      }
      if (dir === 'down' && state.page > 1) {
        return {
          ...state,
          page: state.page - 1
        }
      }
      return state
    default:
      return state
  }
}

export default sticker
