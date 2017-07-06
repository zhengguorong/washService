import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

class Login extends Component {
  static navigationOptions = {
    title: '登录',
    headerBackTitle: null,
    headerStyle: { backgroundColor: '#fff' }
  }
  constructor(props) {
    super(props)
    this.state = { mobile: '', password: '' };
  }
  render() {
    const { errorMessage } = this.props
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <View style={styles.loginView}>
          <View>
            <Text style={styles.phoneLabelText}>手机号码</Text>
            <TextInput onChangeText={(text) => this.setState({ mobile: text })} multiline={true} style={styles.phoneInput} />
          </View>
          <View>
            <Text style={styles.phoneLabelText}>密码</Text>
            <TextInput onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} multiline={true} style={styles.phoneInput} />
          </View>
        </View>
        <TouchableOpacity onPress={this.login.bind(this)} style={styles.loginBtn}><Text style={styles.loginBtnText}>登 录</Text></TouchableOpacity>
      </View>
    )
  }
  login() {
    if (!this.state.mobile || !this.state.password) {
      this.props.toast('用户名或密码不能为空')
      return
    }
    this.props.login(this.state.mobile, this.state.password)
  }
}
export default connect(state => ({
  errorMessage: state.user.errorMessage
}), dispatch => ({
  login(mobile, password) {
    return dispatch({ type: 'user/login', mobile: mobile, password: password })
  },
  toast(text) {
    return dispatch({ type: 'ui/toast', payload: { text: text } })
  }
}))(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  loginView: {
    backgroundColor: '#fff',
    height: 250,
    marginTop: 100,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    paddingBottom: 40
  },
  phoneLabelText: {
    color: '#0058f1'
  },
  phoneInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
    marginBottom: 30,
    paddingBottom: 15,
    fontSize: 16
  },
  loginBtn: {
    height: 50,
    marginBottom: 12,
    backgroundColor: '#0058f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})

