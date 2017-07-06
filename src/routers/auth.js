import LoginTips from '../containers/Auth/loginTips'
import Login from '../containers/Auth/login'
import { StackNavigator } from 'react-navigation'

const AuthRouter = StackNavigator({
  LoginTips: {
    screen: LoginTips
  },
  Login: {
    screen: Login
  }
}, {
    initialRouteName: 'LoginTips',
    headerMode: 'none',
    mode: 'modal'
  })

export default AuthRouter