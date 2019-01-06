export const CURSIVE = 'cursive'
export const PLAIN = 'plain'
export const ROBOT = 'robot     '

export const getFont = name => {
  switch (name) {
    case CURSIVE:
      return`'Petit Formal Script', cursive`
    case PLAIN:
      return `'Arial', monotype`
    case ROBOT:
      return `'Roboto Mono', monospace`
    default:
      return `'Arial', monotype`
  }
}
