import { SELECT_MODE } from '../constants/actionTypes'

const mode = (state={}, action) => {
  switch (action.type) {
    case SELECT_MODE:
      return {
        ...state,
        name: action.mode
      }
    default:
      return state
  }
}

export default mode
