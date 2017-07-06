import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import * as routerService from '../../routers/routerService'
import { NavigationActions } from 'react-navigation'

class LoginTips extends Component {
  static navigationOptions = {
    title: '登录提醒',
    headerBackTitle: null,
    headerStyle: { backgroundColor: '#fff' }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image source={require('../../../assets/imgs/log@2x.png')} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.titleText}>哎呀</Text>
          <Text style={styles.description}>亲～您还没有登录呢！</Text>
        </View>
        <TouchableOpacity onPress={this.toLogin.bind(this)} style={styles.loginBtn}><Text style={styles.loginBtnText}>赶紧登录</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.goBack.bind(this)}><Text style={styles.cancel}>下次吧</Text></TouchableOpacity>
      </View>
    )
  }
  goBack() {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }
  toLogin() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50
  },
  img: {
    width: 200,
    height: 150
  },
  titleText: {
    marginTop: 20,
    fontSize: 20,
    color: '#ff9800',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 6
  },
  loginBtn: {
    width: 180,
    height: 44,
    marginTop: 30,
    marginBottom: 12,
    backgroundColor: '#0058f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 15
  },
  cancel: {
    fontSize: 14,
    color: '#0058f1',
    textDecorationLine: 'underline'
  }
})

export default connect(state => ({

}), dispatch => ({

}))(LoginTips)