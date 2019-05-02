import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

class AuthScreen extends Component {
  state = {
    email: '',
    password: ''
  }
  
  checkLogin() {
    const {email, password} = this.state
    console.warn(email, password)
    if(email=='admin' && password=='admin') {
        this.props.navigation.navigate('map')
    } else {
        alert('Email/Password incorrect') 
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Login into your app</Text>
        <TextInput 
            style={styles.textInput}
            placeholder='email'
            onChangeText={text => this.setState({email: text})}/>
        <TextInput 
            style={styles.textInput} 
            secureTextEntry={true}
            placeholder='password'
            onChangeText={text => this.setState({password: text})}/>
        <Button 
            title='Login'
            onPress={() => this.checkLogin()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%'
  }
})

export default AuthScreen;

