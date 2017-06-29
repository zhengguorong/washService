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
import Swiper from 'react-native-swiper';

class Mall extends Component {
  render() {
    const { banners, products } = this.props
    console.log(this.props.test)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(products)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.cartBtn}><Image source={require('../../../assets/imgs/cart_total@2x.png')}/></TouchableOpacity>
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
    this.props.getAll()
  }
  toProductDetail (itemId) {
    this.props.navigation.navigate('ProductDetail',{ id: itemId})
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
  banners: state.mall.index.banners,
  categorys: state.mall.index.categorys,
  products: state.mall.index.products,
  test: state
}), dispatch => ({
  getAll() {
    return dispatch({ type: 'mall/index/getAll' })
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
    zIndex:1,
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
    fontSize:12
  },
  cartBtn: {
    position: 'absolute',
    right: 12,
    top:20,
    width: 24,
    height: 24,
    zIndex:1
  }
})