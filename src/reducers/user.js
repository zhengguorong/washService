import { handleActions } from 'redux-actions'

export const initialState = {
  showNoLogin: false,
  errorMessage: '',
  loginSuccess: false,
  userInfo: {}
}

export default handleActions({
  'user/nologin/show'(state) {
    return { ...state, showNoLogin: true }
  },
  'user/nologin/hide'(state) {
    return { ...state, showNoLogin: false}
  },
  'user/login/success' (state) {
    return { ...state, loginSuccess: true}
  },
  'user/login/fail' (state, {payload}) {
    return {...state, errorMessage: payload}
  },
  'user/userInfo/save' (state, {payload}) {
    return {...state, userInfo: payload}
  }
}, initialState)