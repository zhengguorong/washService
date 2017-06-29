import Mall from '../containers/Mall'
import ProductDetail from '../containers/Mall/productDetail'

const mallRouter = {
  Mall: {
    screen: Mall
  },
  ProductDetail: {
    path: 'prductDetail/:id',
    screen: ProductDetail,
  },
}

export default mallRouter