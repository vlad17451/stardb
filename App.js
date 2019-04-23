import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, RandomPlanet } from "./src/Components";
import { PersonScreen, PlanetScreen, StarshipScreen } from "./src/Screens";
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

class Home extends Component {
  render() {
    return (
      <View>
        <Header title={'Home'}/>
        <View>
          <Text>Hello!!</Text>
        </View>
      </View>
    )
  }
}

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: RandomPlanet},
  Planets: { screen: PlanetScreen},
  Person: { screen: PersonScreen},
  Starship: { screen: StarshipScreen},
})

const AppContainer = createAppContainer(AppDrawerNavigator)