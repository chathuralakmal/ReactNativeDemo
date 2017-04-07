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
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import {CirclesLoader, PulseLoader, TextLoader, DotsLoader, LinesLoader} from 'react-native-indicator';
import Loginform from './Loginform';

var Spinner = require('react-native-spinkit');

export default class Login extends Component {


  render() {


    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainor}>
          <Image style={styles.logo} source={require('../../images/login_logo.png')}/>
        </View>

        <View style={styles.spinnerContainer}>
            <LinesLoader />
            {/*<TextLoader text="Please wait" />*/}
        </View>

        <View style={styles.formContainor}>
            <Loginform />
        </View>
        
        <View style={styles.footerContainor}>
          <Text>Copyright 2017 WishQue</Text>
        </View>
      </KeyboardAvoidingView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoContainor: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spinnerContainer: {
   
    justifyContent: 'center',
    alignItems: 'center',
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

