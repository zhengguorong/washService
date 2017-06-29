import { take, put, call, fork, all, takeLatest} from 'redux-saga/effects'
import mall from './mall'

export default function* root() {
  yield all([
    fork(mall)
  ])
}