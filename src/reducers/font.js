import { SELECT_FONT, FONT_PAGE } from '../constants/actionTypes'

const font = (state={}, action) => {
  switch (action.type) {
    case SELECT_FONT:
      return {
        ...state,
        name: action.font
      }
    case FONT_PAGE:
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

export default font
