import { take, put, fork, select, call, takeLatest, all} from 'redux-saga/effects'
import * as api from '../services/api'

// 获取商城首页数据
export function* getMallIndex () {
  yield fork(getBanners)
  yield fork(getCategorys)
  yield fork(getProducts)
}

export function* getBanners () {
  yield put({type: 'mall/index/banners/start'})
  const banner = yield call(api.getBannerList)
  yield put({type: 'mall/index/banners/save', payload: banner.bannerList})
  yield put({type: 'mall/index/banners/end'})
}

export function* getCategorys () {
  yield put({type: 'mall/index/categorys/start'})
  const category = yield call(api.getCategoryList) 
  yield put({type: 'mall/index/categorys/save', payload: category.categorys})
  yield put({type: 'mall/index/categorys/end'})
}

export function* getProducts () {
  yield put({type: 'mall/index/products/start'})
  const recommond = yield call(api.getRecommendItem) 
  yield put({type: 'mall/index/products/save', payload: recommond.recommendManage})
  yield put({type: 'mall/index/products/start'})
}

export default function* mall () {
  yield all([
    takeLatest('mall/index/getAll', getMallIndex)
  ])
}