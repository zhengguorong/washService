import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View
} from 'react-native'

class UserCenter extends Component {
  render () {
    return (
      <View>
        <Text>UserCenter</Text>
      </View>
    )
  }
}

export default connect(state => ({

}), dispatch => ({

}))(UserCenter)