import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Toast extends Component {
  render() {
    const { visible, text, kind } = this.props
    if (!visible) return null
    return (
      <View style={styles.toastView}>
        <Text style={styles.toastText}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toastView: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#000',
    zIndex: 999,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 5,
    alignSelf: 'center',
    opacity: 0.8
  },
  toastText: {
    color: '#fff',
    fontSize: 14
  }
})