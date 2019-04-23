import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Header } from '../../Components'
import b from '../../../bootstrap'
import SwapiService from '../../Services/Services'

const s = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  card: {
    backgroundColor: '#32bfa1',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#000000',
  }
});

class PlanetScreen extends Component {

  swapiService = new SwapiService()

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }

  constructor() {
    super()
    this.updatePlanet()
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25)+2
    this.swapiService.getPlanet(id)
      .then((planet)=> {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        })
      })
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state
    return (
      <View>
        <Header title={'Planets'}/>

        <View style={[b.alignItemsCenter, b.dFlex, s.card]}>
          <View>
            <Image
              style={{width: 160, height: 160}}
              source={{uri: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}}
            />
          </View>
          <View style={b.pl2}>
            <Text style={s.title}>{name}</Text>
            <Text>Население: {population}</Text>
            <Text>Оборот: {rotationPeriod} дней</Text>
            <Text>Диаметр: {diameter} км</Text>
          </View>
        </View>
      </View>
    )
  }
}
export { PlanetScreen }