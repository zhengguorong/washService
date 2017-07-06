import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import tabs from './tabs'
import mallRouter from './mall'
import userRouter from './user'
import authRouter from './auth'
import Toast from '../components/Toast'
import * as RouterService from './routerService'

const MainNavigator = StackNavigator({
  ...mallRouter,
  ...userRouter,
  NoLogin: {
    screen: authRouter
  },
  tabs: {
    screen: tabs
  }
}, {
    initialRouteName: 'tabs'
  })

class AppNavigator extends Component {
  componentDidMount() {
    RouterService.setNavigator(this.navigator);
  }
  render() {
    const {toast} = this.props
    return (
      <View style={styles.container}>
        <MainNavigator ref={nav => { this.navigator = nav; }} />
          <Toast visible={toast.visible} text={toast.text} kind={toast.kind}/>
      </View>
    );
  }
}

export default connect(state => ({
  toast: state.ui.toast
}), dispatch => ({

}))(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})