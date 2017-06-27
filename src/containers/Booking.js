import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

class Booking extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={styles.headerText}>至尊洗衣</Text></View>
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