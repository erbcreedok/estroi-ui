export const withStopPropagation = (fn) => (event) => {
  event.stopPropagation()
  fn(event)
}
