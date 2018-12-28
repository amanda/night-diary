import { SELECT_COLOR, COLOR_PAGE } from '../constants/actionTypes'

const color = (state={name: '', page: 1}, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return {
        ...state,
        name: action.color
      }
    case COLOR_PAGE:
      const dir = action.direction
      if (dir === 'up') {
        if (state.page < 4) {
          return {
            ...state,
            page: state.page + 1
          }
        }
      }
      if (dir === 'down') {
        if (state.page > 1) {
          return {
            ...state,
            page: state.page - 1
          }
        }
      }
      return state
    default:
      return state
  }
}

export default color
