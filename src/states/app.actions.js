export const showLoading = () => {
  return {
    type: 'SHOW_LOADING',
  }
}

export const setLoading = (isOpen = false) => {
  return {
    type: 'SET_LOADING',
    payload: isOpen
  }
}
