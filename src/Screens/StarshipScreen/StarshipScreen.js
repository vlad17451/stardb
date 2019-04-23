import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import { Header } from '../../Components'
import styles from '../../../bootstrap'

class StarshipScreen extends Component {


  render() {
    return (
      <View>
        <Header title={'Planets'}/>
        <View style={styles.container}>
          <Text>Starship1</Text>
          <Text>Starship2</Text>
          <Text>Starship3</Text>
        </View>
      </View>
    )
  }
}
export { StarshipScreen }