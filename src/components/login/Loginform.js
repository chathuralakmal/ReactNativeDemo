import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
export default class Loginform extends Component{
	constructor(props){
		super(props);
		 this.state = {
			username: '',
			password: '',
		}

		this._login = this._login.bind(this);
	}

	_login(){
		const { username, password } = this.state;
		console.log(username);
			let formdata = new FormData();
			formdata.append("key", '')
			formdata.append("username", username)
			formdata.append("password", password)
			formdata.append("push_token", 'af56b8e07f288abc')
			formdata.append("device_token", 'af56b8e07f288abc')
			formdata.append("device_type", 'I')
			fetch('http://wishqueuat.fexcon.com.au/ws/login', {method: 'POST', body:formdata, headers: {'Accept':'application/json', 'Content-Type':'application/json',}})
			.then(function(response) {
				if(response.status == 200) return response.json();
				else throw new Error('Something went wrong on api server!');
			})
			.then(function(response) {
				console.debug(response);
				// ...
			})
			.catch(function(error) {
				console.error(error);
			});		
	}

	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.input} placeholder="Username" keyboardType="email-address" returnKeyType="next"
				onSubmitEditing={() => this.passwordInput.focus()}
				onChangeText={(username) => this.setState({username})}/>

				<TextInput style={styles.input} placeholder="Password" secureTextEntry returnKeyType="go"
				ref={(input) => this.passwordInput = input}
				onChangeText={(password) => this.setState({password})}/>
			
				<TouchableOpacity style={styles.buttonContainer} onPress={this._login}>
					<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	padding: 40,
	marginBottom:20,
  },
  input : {
  	padding: 10,
  	height: 40,
  	marginBottom: 20,
  	backgroundColor : '#ecf0f1',
  },
  buttonContainer : {
	  paddingVertical: 10,
	  backgroundColor: '#2980b9'
  },
  buttonText : {
	textAlign:'center',
	color: '#fff',
	fontSize: 16
  },
});