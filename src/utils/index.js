import Dimensions from 'Dimensions'
import {
  AsyncStorage
} from 'react-native'

export default {
  /*屏幕尺寸*/
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  isLogin: () => {
    let token = AsyncStorage.getItem('token').then((err, token) => {
      if (token) {
        return true
      } else {
        return false
      }
    })

  },
  setToken: (token) => {
    AsyncStorage.setItem('token', token)
  },
  getToken: () => {
    AsyncStorage.getItem('token')
  }
}