import { handleActions, Action } from 'redux-actions'

export const initialState = {
  banners: [],
  categorys: [],
  products: []
}

export default handleActions({
  'mall/banners'(state, { payload }) {
    return Object.assign({}, state, { banners: payload })
  },
  'mall/categorys'(state, { payload }) {
    return Object.assign({}, state, { categorys: payload })
  },
  'mall/products'(state, { payload }) {
    return Object.assign({}, state, { products: payload })
  }
}, initialState)