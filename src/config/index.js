export const APP_PROP_APP_TYPE = 'washMall'
export const APP_PROP_CLIENT = 'wx'
export const APP_PROP_CUID = '123'
export const APP_PROP_VERSION = '1.0.0'
export const APP_PROP_FORMAT = 'json'
export const APP_PROP_SECRET = 'Er78s1hcT4Tyoaj2'

const envs = {
  development: {
    mall: 'http://tmallapi.bluemoon.com.cn/moonMall-gateway',
    rogon: 'http://tmallapi.bluemoon.com.cn/moonRegion',
    wash: 'http://tmallapi.bluemoon.com.cn/washMall',
    wechat: 'http://tmallapi.bluemoon.com.cn/wechat'
  },
  mock: {
    mall: 'http://tmallapi.bluemoon.com.cn/moonMall-gateway',
    rogon: 'http://tmallapi.bluemoon.com.cn/moonRegion',
    wash: 'http://192.168.236.1:9002/mockjsdata/33/washMall',
    wechat: 'http://tmallapi.bluemoon.com.cn/wechat'
  },
  production: {
    mall: '',
    rogon: '',
    wash: 'http://mallapi.bluemoon.com.cn/washMall',
    wechat: 'http://mallapi.bluemoon.com.cn/wechat'
  }
}


