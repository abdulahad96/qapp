import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default class LoginScreen extends React.Component {
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
      } = await Expo.Facebook.logInWithReadPermissionsAsync('2256367651242261', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // console.log((await response.json()).name)
        let user = (await response.json());
        Alert.alert('Logged in!', user.name);
        this.props.navigation.replace("Home")
        // Alert.alert('your id is',`${(await response.json())}`);
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
    backgroundColor: '#8f7a7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});