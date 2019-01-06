import { SELECT_PAPER, PAPER_PAGE } from '../constants/actionTypes'

const paper = (state={name: '', page: 1}, action) => {
  console.log('paper reducer', action)
  switch (action.type) {
    case SELECT_PAPER:
      return {
        ...state,
        name: action.paper
      }
    case PAPER_PAGE:
      const dir = action.direction
      if (dir === 'up' && state.page < 4) {
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

export default paper
