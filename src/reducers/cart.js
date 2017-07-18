import { handleActions } from 'redux-actions'

export const initialState = {
  isAddingCart: false,
  isGettingCart: false,
  productList: [],
  totalPriceInfo: {},
  total: 0
}

export default handleActions({
  'cart/add/start'(state) {
    return { ...state, isAddingCart: true }
  },
  'cart/add/end'(state) {
    return { ...state, isAddingCart: false }
  },
  'cart/add/save'(state) {
    return { ...state, total: state.total + 1 }
  },
  'cart/products/start'(state) {
    return { ...state, isGettingCart: true }
  },
  'cart/products/save'(state, {payload}) {
    return { ...state, productList: payload.productList, totalPriceInfo: payload.totalPriceInfo }
  },
  'cart/products/end'(state) {
    return { ...state, isGettingCart: false }
  },
  'cart/total/save'(state, { payload }) {
    return { ...state, total: payload }
  }
}, initialState)