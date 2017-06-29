import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

class Booking extends Component {
  static navigationOptions = {
    title: '至尊洗衣',
    headerStyle: { backgroundColor: '#fff' }
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

}))(Booking)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 55,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerText: {
    fontSize: 16
  }
})