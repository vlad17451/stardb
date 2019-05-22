import { Image, Text, View} from "react-native";
import b from "../../bootstrap";
import React, { Component} from "react";
import { Card } from 'react-native-elements'
import SwapiService from '../Services/Services'


class PersonDetails extends Component {

  swapiService = new SwapiService()

  state = {
    person: null
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  updatePerson() {
    this.setState({person: null})
    const { personId } = this.props
    if (!personId) return
    this.swapiService.getPerson(personId)
      .then((person) => {
        this.setState({person})
      })
  }

  render() {

    if (!this.state.person) {
      return <Card><Text>Выберите персонажа</Text></Card>
    }

    const { id, name, gender, eyeColor, birthYear } =  this.state.person

    return (
      <Card>
        <View style={[b.alignItemsCenter, b.dFlex]}>
          <View>
            <Image
              style={{width: 120, height: 120}}
              source={{uri: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}}
            />
          </View>
          <View style={[b.pl2]}>
            <Text style={b.title}>{name}</Text>
            <Text>Пол: {gender}</Text>
            <Text>Дата рождения: {birthYear}</Text>
            <Text>Цвет глаз: {eyeColor}</Text>
          </View>
        </View>
      </Card>

    )
  }
}

export { PersonDetails }