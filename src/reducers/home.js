import { handleActions } from 'redux-actions'

export const initialState = {
  isLoading: false
}

export default handleActions({
  'home/products/start' (state) {
    return {
      ...state,
      isLoading: true
    }
  }
},initialState)