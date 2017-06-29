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
  console.log(itemId)
  return request.post('/washMall/item/getItemDetail', {itemId: itemId})
}