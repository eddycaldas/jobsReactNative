import React, { Component } from "react";
import {View, Text, StyleSheet,Platform} from 'react-native';
import {Button} from 'react-native-elements';


class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Review Jobs',
    headerRight: (
            <Button 
              title="Settings" 
              onPress={() => { navigation.navigate('settings')}}
              type="clear"
            />
        )
        
  })

    
      
    
  
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    )
  }
}

export default ReviewScreen;