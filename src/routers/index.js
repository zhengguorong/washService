import { StackNavigator } from 'react-navigation'
import tabs from './tabs'
import mallRouter from './mall'

const MallStack = StackNavigator({
  ...mallRouter,
  tabs: {
    screen: tabs
  }
}, {
    initialRouteName: 'tabs'
  })

export default MallStack
