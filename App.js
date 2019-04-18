
import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView, Image} from 'react-native';
import {Card, Button} from 'react-native-elements'

import Deck from './components/Deck/Deck';

const employeeAPI = "https://jobsdb2019.herokuapp.com/employee"
const employerAPI = 'https://jobsdb2019.herokuapp.com/employer'

export default class App extends Component {
  state = {
    isLoading: true,
    dataSource: null
  }
  
  componentDidMount = () => {
    return fetch(employeeAPI)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  renderCard = (item) => {
    return (
        <Card
            key={item.id}
            title={item.name}
            image={{uri: item.image}}
            >
          <Text style={{marginBottom: 10}}>
            Skills: {item.skills}. Zip Code: {item.zipCode}. Phone Number: {item.number}
          </Text>
          <Button 
            icon={{name: 'phone'}}
            title="Contact"/>  
        </Card>
    )
  }  
  
  render() {
    
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
         <ActivityIndicator />
        </View>  
      )
    } else {
        return (
        <ScrollView style={styles.container}>
            <Deck 
              data={this.state.dataSource}
              renderCard={this.renderCard}
            />
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },

});
