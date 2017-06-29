import { take, put, fork, select, call, takeLatest, all} from 'redux-saga/effects'
import * as api from '../services/api'

// 获取商城首页数据
export function* getMallIndex () {
  const banner = yield call(api.getBannerList)
  const category = yield call(api.getCategoryList)
  const recommond = yield call(api.getRecommendItem)
  yield put({type: 'mall/banners', payload: banner.bannerList})
  yield put({type: 'mall/categorys', payload: category.categorys})
  yield put({type: 'mall/products', payload: recommond.recommendManage})
}

export default function* mall () {
  yield all([
    takeLatest('mall/getMallIndex', getMallIndex)
  ])
}