import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  WebView,
  StyleSheet
} from 'react-native'

class Science extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <WebView
            source={{ uri: 'http://mallapi.bluemoon.com.cn/App/h5/newproduct/index.html' }}
          />
        </View>
      </View>
    )
  }
}

export default connect(state => ({

}), dispatch => ({

}))(Science)

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