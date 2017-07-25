const test = (state = { test: false }, action) => {

  switch (action.type) {
    case 'test':
      return {
        test: action.payload
      }
    default:
      return state
  }
}

export const setSuccess = () => ({ type: 'test', payload: true })

export default test