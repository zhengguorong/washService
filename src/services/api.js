import request from './request'

// 获取商城首页banner
export const getBannerList = (pageType = 'WASHMALL') => {
  return request.post('/washMall/app/getBannerList', { body: { pageType: pageType } })
}

// 获取商城类目
export const getCategoryList = () => {
  return request.post('/washMall/item/getCategoryList')
}

// 获取商城首页推荐商品
export const getRecommendItem = () => {
  return request.post('/washMall/item/getRecommendItem')
}

// 获取商品详情
export const getItemDetail = (itemId) => {
  return request.post('/washMall/item/getItemDetail', { body: { itemId: itemId } })
}

// 添加商品到购物车
export const addCartProduct = (itemId, num, productType = 'ITEM') => {
  return request.post('/washMall/cart/addCartProduct', {isAuth: true, body: { productId: itemId, num: num, productType: productType } })
}

// 获取购物车商品数量
export const getTotalProducts = () => {
  return request.post('/washMall/cart/getTotalProducts', {needToken: true})
}

// 获取购物车所有商品
export const getCartList = () => {
  return request.post('/washMall/cart/getCartList', {isAuth: true})
}

// 用户登录
export const login = (mobile, password) => {
  return request.post('/washMall/account/login', {body: { mobile: mobile, password: password } })
}

// 退出登录
export const logout = () => {
  return request.post('/washMall/account/logout', {needToken: true})
}

// 获取用户信息
export const getUserInfo = () => {
  return request.post('/washMall/user/getUserInfo')
}

// 获取社区首页
export const getPostList = (pageSize, queryType = 'All') => {
  return request.post('/washMall/bbs/getPostList', { pageSize, queryType })
}