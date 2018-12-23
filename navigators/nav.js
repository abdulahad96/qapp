import LoginScreen from '../component/login';
import HomeScreen from '../component/home';
import CompanyScreen from '../component/company'
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  

  const AppNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Company:{screen: CompanyScreen}
  })
  export default createAppContainer(AppNavigator);