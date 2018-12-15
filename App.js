import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.login = this.login.bind(this);
    
  }
    async login(){
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('551941698550597', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
}

  render() {
    return (
      <View style={styles.container}>
  <Button
  onPress={this.login}
  title="Login With Facebook"
  color="#841584"
  accessibilityLabel="facebook login"
/>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  
//   render() {
//     return (
// 
//     );