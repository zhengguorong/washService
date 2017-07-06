import { AsyncStorage } from 'react-native'
import { take, put, fork, select, call, takeLatest, all } from 'redux-saga/effects'
import * as api from '../services/api'
import tools from '../utils'
import * as routerService from '../routers/routerService'
import { ajaxCall } from './common'

export function* AddToCart({product}) {
  yield put({ type: 'cart/add/start' })
  const response = yield call(ajaxCall, api.addCartProduct, product.itemId, 1)
  if (!response) return
  yield put({ type: 'cart/add/save', payload: product})
  yield put({ type: 'cart/add/end' })
}

export default function* cart() {
  yield all([
    takeLatest('cart/addToCart', AddToCart),
  ])
}
