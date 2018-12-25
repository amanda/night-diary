import { SELECT_COLOR } from '../constants/actionTypes'

const color = (state={}, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state
  }
}

export default color
