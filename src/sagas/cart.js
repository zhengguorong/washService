import { put,call, takeLatest, all } from 'redux-saga/effects'
import * as api from '../services/api'
import { ajaxCall } from './common'

export function* addToCart({product}) {
  yield put({ type: 'cart/add/start' })
  const response = yield call(ajaxCall, api.addCartProduct, product.itemId, 1)
  if (!response) return
  yield put({type: 'ui/toast', payload: {text: '加入购物车成功'}})
  yield put({ type: 'cart/add/save', payload: product})
  yield put({ type: 'cart/add/end' })
}

export function* getTotal () {
  const response = yield call(ajaxCall, api.getTotalProducts)
  if (!response) return
  yield put({type: 'cart/total/save', payload: response.total})
}

export function* getCartList () {
  yield put({ type: 'cart/products/start'})
  const response = yield call(ajaxCall, api.getCartList)
  if (!response) return
  yield put({ type: 'cart/products/save', payload: response})
  yield put({ type: 'cart/products/end'})
}

export default function* cart() {
  yield all([
    takeLatest('cart/addToCart', addToCart),
    takeLatest('cart/getTotal', getTotal),
    takeLatest('cart/getCartList', getCartList)
  ])
}
