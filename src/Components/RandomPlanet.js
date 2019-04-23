import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { Header, ErrorMes, PlanetBox, ItemList } from '.'
import b from '../../bootstrap'
import SwapiService from '../Services/Services'



const s = StyleSheet.create({
  card: {
    backgroundColor: '#5cebf8',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000000',
  }
});

class RandomPlanet extends Component {

  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 3000)
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  onError = (err) => {
    this.setState({error: true, loading: false})
  }

  reloadPlanet() {
    this.setState({loading: true})
    this.updatePlanet()
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25) + 3
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state
    const errorMassage = error ?  <ErrorMes /> : null
    const spinner = loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
    const content = !(loading || error) ? (
      <View>
        <PlanetBox planet={planet}/>
        <Button
          onPress={() => {
            this.reloadPlanet()
          }}
          title="Reload"
        />
      </View>
    ) : null

    // if (loading) {
    //   return <ActivityIndicator size="large" color="#0000ff" />
    // }

    return (
      <View>
        <Header title={'Random Planet'}/>
        <View style={[s.card, b.justifyContentCenter]}>
          {errorMassage}
          {spinner}
          {content}
          <ItemList />
        </View>
      </View>
    )
  }
}




export { RandomPlanet }