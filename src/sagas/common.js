import { take, put, call, select } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import * as routerService from '../routers/routerService'

export function* ajaxCall(fn, ...args) {
  const token = yield call(AsyncStorage.getItem, 'token')
  if (!token) {
    yield call(routerService.navigate, 'NoLogin')
    return
  }
  const res = yield call(fn, ...args)
  if (res && res.responseCode === 1301) {
    yield call(AsyncStorage.setItem, 'token', '')
    yield call(routerService.navigate, 'NoLogin')
  } else if (res && res.responseCode === 1101) {
    yield put( {type: 'ui/toast', payload: {text: res.responseMsg}})
  } else {
    return res
  }
}
