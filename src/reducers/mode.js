import { SELECT_MODE } from '../constants/actionTypes'

const mode = (state={}, action) => {
  switch (action.type) {
    case SELECT_MODE:
      return {
        ...state,
        mode: action.mode
      }
    default:
      return state
  }
}

export default mode
