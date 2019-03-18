import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


import HomeScreen from './page/Home';
import SignInScreen from './page/Sign';
import OtherScreen from './page/Other';




const Home = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const Auth = createStackNavigator({ SignIn: SignInScreen });




export default createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            // AuthLoading: AuthLoadingScreen,
            Home: Home,
            Auth: Auth,
        },
        {
        // initialRouteName: 'AuthLoading',
            initialRouteName: signedIn ? "Home" : "Auth"
        }
    );
  };
  