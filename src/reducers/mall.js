/**
 * reduce命名规则
 * 例如 'mall/index/banners/start'
 * mall表示模块，index表示页面，banners表示资源，start表示动作,这里的start表示开始进行网络请求
 */

import { handleActions, Action } from 'redux-actions'

export const initialState = {
  index: {
    banners: [],
    categorys: [],
    products: [],
    isLoadingBanners: false,
    isLoadingCategorys: false,
    isLoadingProducts: false
  }
}

export default handleActions({
  'mall/index/banners/start'(state) {
    return { ...state, isLoadingBanners: true }
  },
  'mall/index/banners/save'(state, { payload }) {
    return { ...state, index: { ...state.index, banners: payload } }
  },
  'mall/index/banners/end'(state) {
    return { ...state, isLoadingBanners: false }
  },
  'mall/index/categorys/start'(state) {
    return { ...state, isLoadingCategorys: true }
  },
  'mall/index/categorys/save'(state, { payload }) {
    return { ...state, index: { ...state.index, categorys: payload } }
  },
  'mall/index/categorys/end'(state) {
    return { ...state, isLoadingCategorys: false }
  },
  'mall/index/products/start'(state) {
    return { ...state, isLoadingProducts: true }
  },
  'mall/index/products/save'(state, { payload }) {
    return { ...state, index: { ...state.index, products: payload } }
  },
  'mall/index/products/end'(state) {
    return { ...state, isLoadingProducts: false }
  }
}, initialState)