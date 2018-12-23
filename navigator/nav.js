import LoginScreen from '../component/login';
import HomeScreen from '../component/home';
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  

  const AppNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
  })
  export default createAppContainer(AppNavigator);