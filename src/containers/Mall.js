import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as api from '../services/api'

class Mall extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          locations={[0, 1, 1]}
          colors={['#000', '#fff', '#fff']}
          style={styles.linearGradient}>
        </LinearGradient>
        <ScrollView style={styles.scrollView}>
          <Text>1231</Text>
        </ScrollView>
      </View>
    )
  }
  componentDidMount() {
   api.getBannerList() 
  }
}

export default connect(state => ({

}), dispatch => ({

}))(Mall)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    height: 64,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100,
    opacity: 0.4
  },
  scrollView: {
    marginTop:14
  }
})