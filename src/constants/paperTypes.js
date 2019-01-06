import lined from '../img/format_lined.png'
import grid from '../img/format_grid.png'
import pinkline from '../img/format_linedwpink.png'

export const LINES = 'lines'
export const GRID = 'grid'
export const BLANK = 'blank'
export const PINK = 'pink'

export const getPaper = name => {
  switch (name) {
    case LINES:
      return lined
    case GRID:
      return grid
    case PINK:
      return pinkline
    default:
      return null
  }
}
