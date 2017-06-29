import React, { Component } from 'react'
import { connect } from 'react-redux'
import util from '../../utils'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'

class Mall extends Component {
  render() {
    const { banners, products } = this.props
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(products)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cartBtn}><Image style={styles.cartImage} source={require('../../../assets/imgs/cart_large@3x.png')} /></TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <Swiper height={160}>
            {banners.map((item, index) => {
              return (
                <Image
                  key={index}
                  style={styles.container}
                  source={{ uri: item.displayPic.picUrl }}
                />)
            })}
          </Swiper>
          <ListView
            style={styles.productList}
            enableEmptySections={true}
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
          />
        </ScrollView>
      </View>
    )
  }
  componentDidMount() {
    this.props.getMallIndex()
  }
  toProductDetail(itemId) {
    this.props.navigation.navigate('ProductDetail', { id: itemId })
  }
  _renderRow(rowData) {
    return (
      <TouchableOpacity onPress={this.toProductDetail.bind(this, rowData.itemId)}>
        <View style={styles.mark}><Text style={styles.markText}>{rowData.mark}</Text></View>
        <Image resizeMode='contain' style={[styles.product, { width: util.size.width, height: util.size.width * rowData.imageVo.height / rowData.imageVo.width }]} source={{ uri: rowData.imageVo.picUrl }} />
      </TouchableOpacity>
    )
  }
}

export default connect(state => ({
  banners: state.mall.banners,
  categorys: state.mall.categorys,
  products: state.mall.products
}), dispatch => ({
  getMallIndex() {
    return dispatch({ type: 'mall/getMallIndex', id: '213' })
  }
}))(Mall)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
  },
  productList: {
    marginTop: 4
  },
  product: {
    marginTop: 1
  },
  mark: {
    position: 'absolute',
    zIndex: 1,
    width: 64,
    height: 20,
    borderBottomRightRadius: 10,
    backgroundColor: '#d23638',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0
  },
  markText: {
    color: '#fff',
    fontSize: 12
  },
  cartBtn: {
    position: 'absolute',
    right: 15,
    top: 30,
    zIndex: 1
  },
  cartImage: {
    width: 24,
    height: 24
  }
})