import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Toast extends Component {
  render() {
    const { num } = this.props
    if (!num) return null
    return (
      <View style={styles.cartTotal}>
        <Text style={styles.cartTotalText}>{num}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cartTotal: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    position: 'absolute',
    right: -10,
    top: -10,
    zIndex: 1,
    borderRadius: 10
  },
  cartTotalText: {
    color: '#fff',
    fontSize: 12
  },
})