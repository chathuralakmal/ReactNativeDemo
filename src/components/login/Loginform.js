import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
export default class Loginform extends Component{
	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.input} placeholder="Username" />
				<TextInput style={styles.input} placeholder="Password"/>
			
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	padding: 20,
  },
  input : {
  	padding: 10,
  	height: 40,
  	marginBottom: 20,
  	backgroundColor : '#ecf0f1',
  },
});