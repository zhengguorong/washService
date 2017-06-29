import React, { Component } from 'react'
import { connect } from 'react-redux'
import util from '../../utils'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper'

class Community extends Component {
  static navigationOptions = {
    title: '商品详情',
    headerStyle: { backgroundColor: '#fff' },
    headerRight: <TouchableOpacity onPress={() => { console.log('share') }} style={{ marginRight: 14 }}><Image source={require('../../../assets/imgs/share@2x.png')} /></TouchableOpacity>
  }
  render() {
    const { productDetail } = this.props
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.intro}>
            <Image resizeMode='contain' style={styles.productImg} source={{ uri: productDetail.picUrl && productDetail.picUrl.picUrl }} />
            <View style={styles.productView}>
              <Text style={styles.productText}>{productDetail.itemName}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.priceText}>￥{(productDetail.memberPrice / 100).toFixed(2)}</Text>
              <Text style={styles.marketPrictText}>￥{(productDetail.marketPrice / 100).toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailHeader}>
              <TouchableOpacity style={styles.detailHeaderItem}><Text style={styles.headerItemText}>商品详情</Text></TouchableOpacity>
              <TouchableOpacity style={styles.detailHeaderItem}><Text style={styles.headerItemText}>评价</Text></TouchableOpacity>
              <View style={styles.underLine}></View>
            </View>
            <View style={styles.detailContext}>
              {productDetail.artImgUrls&&productDetail.artImgUrls.map((item, index) => {
                return <Image key={index} style={{ width: util.size.width, height: util.size.width * item.height / item.width }} source={{uri: item.picUrl}}/>
              })}
            </View>
          </View>
        </ScrollView>
        <View style={styles.buyBar}>
          <View style={styles.cartIcon}><Image source={require('../../../assets/imgs/cart_total@2x.png')} /></View>
          <View style={styles.addToCart}><Text style={styles.cartText}>加入购物车</Text></View>
          <View style={styles.buyNow}><Text style={styles.cartText}>立即购买</Text></View>
        </View>
      </View>
    )
  }
  componentDidMount() {
    const { params } = this.props.navigation.state
    this.props.getProductDetail(params.id)
  }
}

export default connect(state => ({
  productDetail: state.mall.productDetail
}), dispatch => ({
  getProductDetail(id) {
    return dispatch({ type: 'mall/getProductDetail', id: id })
  }
}))(Community)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  intro: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  productImg: {
    height: 294,
    width: '100%'
  },
  productView: {
    padding: 12,
  },
  productText: {
    fontSize: 17,
    color: '#333'
  },
  priceView: {
    paddingTop: 12,
    paddingBottom: 20,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0483E'
  },
  marketPrictText: {
    fontSize: 10,
    color: '#999',
    marginLeft: 8,
    textDecorationLine: 'line-through'
  },
  detail: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff'
  },
  buyBar: {
    height: 50,
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  cartIcon: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 8
  },
  addToCart: {
    backgroundColor: '#ff9800',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyNow: {
    backgroundColor: '#e0483e',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartText: {
    fontSize: 17,
    color: '#fff'
  },
  detailHeader: {
    flexDirection: 'row',
    height: 44,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    marginBottom: 10
  },
  detailHeaderItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerItemText: {
    fontSize: 15,
    color: '#333'
  },
  underLine: {
    backgroundColor: '#0058f1',
    height: 2,
    width: 70,
    position: 'absolute',
    bottom: 0,
    left: 58
  }
})