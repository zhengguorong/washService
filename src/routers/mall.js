import { StackNavigator } from 'react-navigation'
import Index from '../containers/Mall'
import ProductDetail from '../containers/Mall/productDetail'

const MallStack = StackNavigator({
  Index: {
    screen: Index,
    navigationOptions: {
      header: null
    }
  },
  ProductDetail: {
    path: 'prductDetail/:id',
    screen: ProductDetail,
  },
});

export default MallStack
