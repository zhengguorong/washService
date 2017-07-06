import { TabNavigator } from 'react-navigation'
import { Image, Platform } from 'react-native';
import React from 'react'
import Science from '../containers/Science'
import Community from '../containers/Community'
import Booking from '../containers/Booking'
import Mall from '../containers/Mall'
import UserCenter from '../containers/UserCenter'

// 初始化tab路由
const homeTabs = TabNavigator(
  {
    '科学洗衣': {
      screen: Science,
    },
    '月亮社区': {
      screen: Community,
    },
    '至尊洗衣': {
      screen: Booking,
    },
    '月亮商城': {
      screen: Mall,
    },
    '我的': {
      screen: UserCenter,
    }
  },
  {
    initialRouteName: '月亮商城',
    tabBarOptions: {
      activeTintColor: '#0059f1',
      style: {
        backgroundColor: '#fff'
      }
    },
  }
)

// 设置tab icon
Science.navigationOptions = {
  title: '科学洗衣',
  headerStyle: { backgroundColor: '#fff' },
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/imgs/science-blue@2x.png')}
      style={{ tintColor: tintColor }}
    />
  )
}
Community.navigationOptions = {
  title: '至尊社区',
  headerStyle: { backgroundColor: '#fff' },
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/imgs/community-blue@2x.png')}
      style={{ tintColor: tintColor }}
    />
  )
}
Booking.navigationOptions = {
  title: '至尊洗衣',
  headerStyle: { backgroundColor: '#fff' },
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/imgs/wash-blue@2x.png')}
      style={{ tintColor: tintColor }}
    />
  )
}
Mall.navigationOptions = {
  header: null,
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/imgs/shop-blue@2x.png')}
      style={{ tintColor: tintColor }}
    />
  )
}
UserCenter.navigationOptions = {
  title: '我的',
  headerStyle: { backgroundColor: '#fff' },
  tabBarIcon: ({ tintColor }) => (
    <Image
      source={require('../../assets/imgs/mine-blue@2x.png')}
      style={{ tintColor: tintColor }}
    />
  )
}


export default homeTabs