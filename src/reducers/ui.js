import { handleActions, Action } from 'redux-actions'

export const initialState = {
  toast: { kind: 'success', text: '', visible: false}
}

export default handleActions({
  'ui/toast/show' (state, {payload}) {
    return {...state, toast: {kind: payload.kind, text: payload.text, visible: true}}
  },
  'ui/toast/hide' (state, {payload}) {
    return {...state, toast: {visible: false}}
  }
}, initialState)