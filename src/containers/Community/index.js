import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Community extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftBtn}></View>
          <View>
            <Text style={[styles.headerTextColor, styles.headerTitle]}>这是标题很长的标题</Text>
          </View>
          <View>
            <Text style={[styles.headerTextColor, styles.rightBtn]}>+</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#fff' }}>button</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.changeColor} style={styles.btn}>
          <Text style={{ color: '#fff' }}>button</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(state => ({

}), dispatch => ({

}))(Community)

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
  },
  headerContainer: {
    height: 64,
    backgroundColor: '#1fb8ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTextColor: {
    color: '#fff',
    fontSize: 16
  },
  leftBtn: {
    backgroundColor: '#000',
    width: 60
  },
  headerTitle: {
    backgroundColor: 'blue',
    marginLeft: 10
  },
  rightBtn: {
    paddingRight: 30,
    width: 60,
    backgroundColor: 'red',
    alignItems: 'flex-end'
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})