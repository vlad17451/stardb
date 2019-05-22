import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { PeopleList, PersonDetails, RandomPlanet } from '../Components'
import { Header, Button } from "react-native-elements";


const s = StyleSheet.create({});

class Home extends Component {

  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    return (
      <View>

        <Header centerComponent={{ text: 'Home', style: { color: '#fff' } }}/>
        <ScrollView style={{marginBottom: 100}}>
          <RandomPlanet />
          <PersonDetails personId={this.state.selectedPerson}/>
          <PeopleList onItemSelected={this.onPersonSelected} />
        </ScrollView>
      </View>
    )
  }
}

export { Home }