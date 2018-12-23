import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import AppNavigator from './navigators/nav';

export default class App extends React.Component {
  render() {
    return (
<AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f7a7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  
//   render() {
//     return (
// 
//     );