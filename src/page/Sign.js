import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
//   Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {
    Button,
    Text
} from '@shoutem/ui';
//登陆页面
export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: '登陆',
    };
  
    render() {
      return (
        <View style={styles.container}>
     
             <Button styleName="secondary" onPress={this._signInAsync}  >
            <Text>Sign in</Text>
            </Button>
          {/* <Button title="Sign in!" onPress={this._signInAsync} /> */}
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Home');
    };
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });