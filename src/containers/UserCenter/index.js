import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

class UserCenter extends Component {
  render() {
    return (
      <View>
        <Text>update user center</Text>
        <TouchableOpacity onPress={()=>{this.props.logout()}}><Text>退出登录</Text></TouchableOpacity>
      </View>
    )
  }
}

export default connect(state => ({

}), dispatch => ({
  logout() {
    dispatch({type: 'user/logout'})
  }
}))(UserCenter)