import {Text, View} from "react-native";
import b from "../../bootstrap";
import React, { Component} from "react";
import SwapiService from '../Services/Services'


class ItemList extends Component {

  swapiService = new SwapiService()

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        })
      })
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <Text key={id}>{name}</Text>
      )
    })
  }

  render() {
    const { peopleList } = this.state

    if (!peopleList) {
      return (
        <View>
          <Text>Er</Text>
        </View>
      )
    }

    const items = this.renderItems(peopleList)



    return (
      <View style={b.alignItemsCenter}>
        <Text>{items}</Text>
      </View>
    )
  }
}

export { ItemList }