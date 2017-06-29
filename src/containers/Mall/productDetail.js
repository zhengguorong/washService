import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

class Community extends Component {
  static navigationOptions = {
    title: '商品详情'
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