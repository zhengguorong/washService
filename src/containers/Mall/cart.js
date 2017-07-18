import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image,
  StyleSheet,
} from 'react-native'

class Cart extends Component {
  static navigationOptions = {
    title: '购物车',
    headerStyle: { backgroundColor: '#fff' },
    headerRight: <TouchableOpacity onPress={() => { console.log('share') }} style={{ marginRight: 14 }}><Text>编辑</Text></TouchableOpacity>
  }
  render() {
    const { productList, totalPriceInfo } = this.props
    const buyItems = productList && productList[0] && productList[0].buyItems || []
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(buyItems)
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={this._renderRow}
        />
        <View style={styles.totalView}>
          <View style={styles.totolPriceView}>
            <Image style={styles.checkBox} source={require('../../../assets/imgs/normal@3x.png')}></Image>
            <View>
              <View style={{flexDirection: 'row'}}><Text style={{fontSize: 12, color: '#333'}}>已购买￥{(totalPriceInfo.totalMarketPrice/100).toFixed(2)}</Text><Text style={{fontSize: 12, color: '#333', marginLeft: 10}}>优惠￥{(totalPriceInfo.totalActivityPrice/100).toFixed(2)}</Text></View>
              <View style={{marginTop: 4}}><Text style={{color:'#E0483E', fontSize: 14}}>￥{(totalPriceInfo.totalPrice/100).toFixed(2)}</Text></View>
            </View>
          </View>
          <TouchableOpacity style={styles.submitView}>
            <Text style={styles.submitText}>下   单</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  componentDidMount() {
    this.props.getCartList()
  }
  _renderRow(rowData) {
    return (
      <View style={styles.buyItemView}>
        <TouchableOpacity style={styles.checkBox}>
          <Image source={require('../../../assets/imgs/normal@3x.png')} />
        </TouchableOpacity>
        <Image style={styles.productImg} resizeMode={'contain'} source={{ uri: rowData.imageVo && rowData.imageVo.picUrl }} />
        <View style={styles.productInfo}>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              {rowData.productName}
            </Text>
          </View>
          <View style={styles.priceInfo}>
            <View style={styles.priceView}>
              <View style={styles.memberPriceView}>
                <Text style={styles.memberPrice}>
                  ￥{(rowData.memberPrice / 100).toFixed(2)}
                </Text>
              </View>
              <View style={styles.marketPriceView}>
                <Text style={styles.marketPrice}>
                  ￥{(rowData.marketPrice / 100).toFixed(2)}
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.count}>x{rowData.num}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(state => ({
  productList: state.cart.productList,
  totalPriceInfo: state.cart.totalPriceInfo
}), dispatch => ({
  getCartList() {
    return dispatch({ type: 'cart/getCartList' })
  }
}))(Cart)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buyItemView: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc'
  },
  checkBox: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  productImg: {
    width: 64,
    height: 64,
    marginRight: 8
  },
  productInfo: {
    flex: 1,
    height: 64,
    justifyContent: 'space-between',
  },
  titleView: {
    marginBottom: 8,
  },
  title: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  memberPrice: {
    color: '#e0483e',
    fontSize: 14
  },
  marketPrice: {
    color: '#999',
    fontSize: 9,
    paddingLeft: 4,
    textDecorationLine: 'line-through'
  },
  count: {
    color: '#666',
    fontSize: 14
  },
  totalView: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totolPriceView: {
    flex: 7,
    paddingTop: 10,
    paddingLeft: 12,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  submitView: {
    backgroundColor: '#fe9d0d',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    color: '#fff',
    fontSize: 17
  }
})