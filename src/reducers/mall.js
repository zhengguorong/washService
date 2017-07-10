/**
 * reduce命名规则
 * 例如 'mall/banners/start'
 * mall表示模块，index表示页面，banners表示资源，start表示动作,这里的start表示开始进行网络请求
 */

import { handleActions } from 'redux-actions'

export const initialState = {
  banners: [],
  categorys: [],
  products: [],
  productDetail: {},
  isLoadingBanners: false,
  isLoadingCategorys: false,
  isLoadingProducts: false,
  isLoadingProductDetail:false
}

export default handleActions({
  'mall/banners/start'(state) {
    return { ...state, isLoadingBanners: true }
  },
  'mall/banners/save'(state, { payload }) {
    return { ...state, banners: payload }
  },
  'mall/banners/end'(state) {
    return { ...state, isLoadingBanners: false }
  },
  'mall/categorys/start'(state) {
    return { ...state, isLoadingCategorys: true }
  },
  'mall/categorys/save'(state, { payload }) {
    return { ...state, categorys: payload }
  },
  'mall/categorys/end'(state) {
    return { ...state, isLoadingCategorys: false }
  },
  'mall/products/start'(state) {
    return { ...state, isLoadingProducts: true }
  },
  'mall/products/save'(state, { payload }) {
    return { ...state, products: payload }
  },
  'mall/products/end'(state) {
    return { ...state, isLoadingProducts: false }
  },
  'mall/productDetail/start'(state) {
    return { ...state, isLoadingProductDetail: true }
  },
  'mall/productDetail/save'(state, { payload }) {
    return { ...state, productDetail: payload}
  },
  'mall/productDetail/end'(state) {
    return { ...state, isLoadingProductDetail: false }
  },
}, initialState)