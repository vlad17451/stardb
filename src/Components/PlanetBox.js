import {Image, Text, View} from "react-native";
import b from "../../bootstrap";
import React from "react";

const PlanetBox = ({ planet}) => {
  const { id, name, population, rotationPeriod, diameter} = planet
  return (
    <View style={[b.alignItemsCenter, b.dFlex,]}>
      <View>
        <Image
          style={{width: 160, height: 160}}
          source={{uri: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}}
        />
      </View>
      <View style={b.pl2}>
        <Text style={b.title}>{name}</Text>
        <Text>Население: {population}</Text>
        <Text>Оборот: {rotationPeriod} дней</Text>
        <Text>Диаметр: {diameter} км</Text>
      </View>
    </View>
  )
}

export { PlanetBox }