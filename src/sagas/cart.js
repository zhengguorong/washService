import { put,call, takeLatest, all } from 'redux-saga/effects'
import * as api from '../services/api'
import { ajaxCall } from './common'

export function* AddToCart({product}) {
  yield put({ type: 'cart/add/start' })
  const response = yield call(ajaxCall, api.addCartProduct, product.itemId, 1)
  if (!response) return
  yield put({type: 'ui/toast', payload: {text: '加入购物车成功'}})
  yield put({ type: 'cart/add/save', payload: product})
  yield put({ type: 'cart/add/end' })
}

export default function* cart() {
  yield all([
    takeLatest('cart/addToCart', AddToCart),
  ])
}
