import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    )
  }
}

export default AuthScreen;


// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';
// 
// <Input
//   placeholder='BASIC INPUT'
// />
// 
// <Input
//   placeholder='INPUT WITH ICON'
//   leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
// />
// 
// <Input
//   placeholder='INPUT WITH CUSTOM ICON'
//   leftIcon={
//     <Icon
//       name='user'
//       size={24}
//       color='black'
//     />
//   }
// />
// 
// <Input
//   placeholder='INPUT WITH SHAKING EFFECT'
//   shake={true}
// />
// 
// <Input
//   placeholder='INPUT WITH ERROR MESSAGE'
//   errorStyle={{ color: 'red' }}
//   errorMessage='ENTER A VALID ERROR HERE'
// />