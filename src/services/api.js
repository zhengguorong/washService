import request from './request'

export const getBannerList = (pageType = 'WASHMALL') => {
  return request.post('/washMall/app/getBannerList', {pageType: pageType})
}

export const getCategoryList = () => {
  return request.post('/washMall/item/getCategoryList')
}

export const getRecommendItem = () => {
  return request.post('/washMall/item/getRecommendItem')
}

export const getItemDetail =  (itemId) => {
  return request.post('/washMall/item/getItemDetail', {itemId: itemId})
}

export const addCartProduct = (itemId, num, productType = 'ITEM') => {
  return request.post('/washMall/cart/addCartProduct', {productId: itemId, num: num, productType: productType})
}

export const login = (mobile, password) => {
  return request.post('/washMall/account/login', {mobile: mobile, password: password})
}

export const getUserInfo = () => {
  return request.post('/washMall/user/getUserInfo')
}

export const getPostList = (pageSize, queryType = 'All') => {
  return request.post('/washMall/bbs/getPostList', {pageSize, queryType})
}