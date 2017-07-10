import { put, call, takeLatest, all} from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import * as api from '../services/api'
import md5 from 'md5'
import * as routerService from '../routers/routerService'

export function* login ({mobile, password}) {
  const response = yield call(api.login, mobile, md5(password))
  if (response.responseCode === 0) {
    yield call(AsyncStorage.setItem, 'token', response.token)
    routerService.goBack()
  } else {
    yield put({type: 'ui/toast', payload: {text: response.responseMsg}})
  }
}

export function* getUserInfo () {
  const response = yield call(api.getUserInfo)
  yield put({type: 'user/userInfo/save', payload: response})
}

export default function* user() {
  yield all([
    takeLatest('user/login', login),
    takeLatest('user/userInfo', getUserInfo)
  ])
}