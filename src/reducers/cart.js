import { handleActions, Action } from 'redux-actions'

export const initialState = {
  products: [],
  isAddingCart: false
}

export default handleActions({
  'cart/add/start' (state) {
    return { ...state, isAddingCart: true}
  },
  'cart/add/end' (state) {
    return { ...state, isAddingCart: false}
  },
  'cart/add/save'(state, {payload}) {
    let products = state.products
    products.push(payload)
    return { ...state, products: products }
  }
}, initialState)