import {  put,all, takeEvery} from 'redux-saga/effects'

export function* toast({payload}) {
  yield put({ type: 'ui/toast/show', payload: {text: payload.text, visible: true, kind: payload.kind}})
  yield delay(2000)
  yield put({ type: 'ui/toast/hide', payload: {visible: false}})
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function* ui() {
  yield all([
    takeEvery('ui/toast', toast)
  ])
}