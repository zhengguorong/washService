import { take, put, fork, select, call, takeLatest, all} from 'redux-saga/effects'
import * as api from '../services/api'

// 获取商城首页数据
export function* getMallIndex () {
  yield fork(getBanners)
  yield fork(getCategorys)
  yield fork(getProducts)
}

export function* getBanners () {
  yield put({type: 'mall/banners/start'})
  const banner = yield call(api.getBannerList)
  yield put({type: 'mall/banners/save', payload: banner.bannerList})
  yield put({type: 'mall/banners/end'})
}

export function* getCategorys () {
  yield put({type: 'mall/categorys/start'})
  const category = yield call(api.getCategoryList) 
  yield put({type: 'mall/categorys/save', payload: category.categorys})
  yield put({type: 'mall/categorys/end'})
}

export function* getProducts () {
  yield put({type: 'mall/products/start'})
  const recommond = yield call(api.getRecommendItem) 
  yield put({type: 'mall/products/save', payload: recommond.recommendManage})
  yield put({type: 'mall/products/start'})
}

export function* getProductDetail ({id}) {
  yield put({type: 'mall/productDetail/start'})
  const productDetail = yield call(api.getItemDetail, id)
  yield put({type: 'mall/productDetail/save', payload: productDetail.itemInfo})
  yield put({type: 'mall/productDetail/end'})
}

export default function* mall () {
  yield all([
    takeLatest('mall/getMallIndex', getMallIndex),
    takeLatest('mall/getProductDetail', getProductDetail)
  ])
}