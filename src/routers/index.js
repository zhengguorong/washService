import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
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
import CodePush from 'react-native-code-push'

const MainNavigator = StackNavigator({
  ...mallRouter,
  ...userRouter,
  tabs: {
    screen: tabs
  },
  NoLogin: {
    screen: authRouter
  },
}, {
  initialRouteName: 'tabs'
})

class AppNavigator extends Component {
  componentWillMount() {
    //访问慢,不稳定
    CodePush.checkForUpdate('SeIb0zmwAmdkHs41uO5s2dFnpuoMd8b4328b-22b2-4689-aa5e-f0c415f295c1').then((update) => {
      if (update) {
        CodePush.sync({
          deploymentKey: 'SeIb0zmwAmdkHs41uO5s2dFnpuoMd8b4328b-22b2-4689-aa5e-f0c415f295c1',
          updateDialog: {
            optionalIgnoreButtonLabel: '稍后',
            optionalInstallButtonLabel: '立即更新',
            optionalUpdateMessage: '有新版本了，是否更新？',
            title: '更新提示'
          },
          installMode: CodePush.InstallMode.IMMEDIATE
        })
      }
    })
  }
  componentDidMount() {
    RouterService.setNavigator(this.navigator)
  }
  render() {
    const { toast } = this.props
    return (
      <View style={styles.container}>
        <MainNavigator ref={nav => { this.navigator = nav }} />
        <Toast visible={toast.visible} text={toast.text} kind={toast.kind} />
      </View>
    )
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