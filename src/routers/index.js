import { TabNavigator } from 'react-navigation'
import React from 'react';
import { Button, Text, Platform, ScrollView, StyleSheet } from 'react-native';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Go to home tab"
    />
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Tab" navigation={navigation} />
);

const MyPeopleScreen = ({ navigation }) => (
  <MyNavScreen banner="People Tab" navigation={navigation} />
);


const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    People: {
      screen: MyPeopleScreen,
      path: 'cart',
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default SimpleTabs