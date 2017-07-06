import { take, put, call, fork, all, takeLatest, takeEvery, select} from 'redux-saga/effects'
import mall from './mall'
import cart from './cart'
import user from './user'
import ui from './ui'

export default function* root() {
  yield all([
    fork(mall),
    fork(cart),
    fork(user),
    fork(ui)
  ])
}