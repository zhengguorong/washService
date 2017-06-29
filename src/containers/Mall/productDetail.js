import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Community extends Component {
  static navigationOptions = {
    title: '商品详情',
    headerStyle: {backgroundColor: '#fff'},
    headerRight: <TouchableOpacity onPress={()=>{console.log('share')}} style={{marginRight: 14}}><Image source={require('../../../assets/imgs/share@2x.png')}/></TouchableOpacity>
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

export default connect(state => ({

}), dispatch => ({

}))(Community)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})