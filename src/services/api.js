import request from './request'

export const getBannerList = (pageType = 'WASHMALL') => {
  // request.post('/washMall/app/getBannerList', {pageType: pageType})
  fetch('http://h5.limesoftware.cn/auth/login',{
    body: JSON.stringify({username: 'admin', password: 'admin'}),
    method: 'POST'
  }).then(res=> {
    console.log(res)
  }).catch(res => {
    console.log(res)
  })
}