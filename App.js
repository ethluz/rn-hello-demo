import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import createRootNavigator from './src/index';

import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          signedIn: false,
          checkedSignIn: false
        };
      }
    
      componentDidMount() {
        // const userToken = await AsyncStorage.getItem('userToken');
        AsyncStorage.getItem('userToken').then(res => 
            this.setState({ signedIn: res, checkedSignIn: true })
        )
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        // 检测是否登陆
        // isSignedIn().then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        //   .catch(err => alert("An error occurred"));
      }
    
     render() {
        const {signedIn} = this.state; 
        const AppContainer = createAppContainer(createRootNavigator(signedIn));
        
        return <AppContainer />;
    }
  }