import { handleActions } from 'redux-actions'

export const initialState = {
  isLoadingPostList: false,
  postList: {}
}

export default handleActions({
  'com/postList/start'(state) {
    return { ...state, isLoadingPostList: true }
  },
  'com/postList/end'(state) {
    return { ...state, isLoadingPostList: false }
  },
  'com/postList/save'(state, {payload}) {
    return { ...state, postList: payload }
  }
}, initialState)