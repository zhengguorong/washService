import Mall from '../containers/Mall'
import ProductDetail from '../containers/Mall/productDetail'
import Cart from '../containers/Mall/cart'

const mallRouter = {
  Mall: {
    screen: Mall
  },
  ProductDetail: {
    screen: ProductDetail,
  },
  Cart: {
    screen: Cart
  }
}

export default mallRouter