import { TabNavigator } from 'react-navigation'
import {Image, Platform} from 'react-native';
import React from 'react'
import Science from '../containers/Science'
import Community from '../containers/Community'
import Booking from '../containers/Booking'
import Mall from './mall'
import UserCenter from '../containers/UserCenter'

// 设置tab icon
Science.navigationOptions =  {
  tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/imgs/science-blue@2x.png')}
        style={{tintColor: tintColor}}
      />
    )
}
Community.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/imgs/community-blue@2x.png')}
        style={{tintColor: tintColor}}
      />
    )
}
Booking.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/imgs/wash-blue@2x.png')}
        style={{tintColor: tintColor}}
      />
    )
}
Mall.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/imgs/shop-blue@2x.png')}
        style={{tintColor: tintColor}}
      />
    )
}
UserCenter.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/imgs/mine-blue@2x.png')}
        style={{tintColor: tintColor}}
      />
    )
}

// 初始化tab路由
const HomeTabs = TabNavigator(
  {
    '科学洗衣': {
      screen: Science,
      path: 'science',
    },
    '月亮社区': {
      screen: Community,
      path: 'community',
    },
    '至尊洗衣': {
      screen: Booking,
      path: 'booking',
    },
    '月亮商城': {
      screen: Mall,
      path: 'mall',
    },
    '我的': {
      screen: UserCenter,
      path: 'userCenter',
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
);

export default HomeTabs