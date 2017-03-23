/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Loginform from './Loginform';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainor}>
          <Image style={styles.logo} source={require('../../images/login_logo.png')}/>
        </View>
        <View style={styles.formContainor}>
            <Loginform />
        </View>
        
        <View style={styles.footerContainor}>
          <Text>Copyright 2017 WishQue</Text>
        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainor: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainor: {
    
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  footerContainor : {
    alignItems: 'center',
    marginBottom: 20
  },
});

