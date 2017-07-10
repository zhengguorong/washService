import { takeLatest, all, call,put } from 'redux-saga/effects'
import * as api from '../services/api'

export function* getPostList ({pageSize, queryType}) {
  yield put({type: 'com/postList/start'})
  const response = yield call(api.getPostList,pageSize, queryType)
  yield put({type: 'com/postList/save', payload: response})
  yield put({type: 'com/postList/end'})
}


export default function* mall () {
  yield all([
    takeLatest('com/getPostList', getPostList),
  ])
}