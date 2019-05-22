import { Image, Text, View} from "react-native";
import b from "../../bootstrap";
import React from "react";
import { Card } from 'react-native-elements'

const PersonBox = ({ person }) => {

  return (
    <Card>
      <View style={[b.alignItemsCenter, b.dFlex,]}>
        <View>
          <Image
            style={{width: 120, height: 120}}
            source={{uri: `https://starwars-visualguide.com/assets/img/planets/1.jpg`}}
          />
        </View>
        <View style={b.pl2}>
          <Text style={b.title}>123</Text>
          <Text>Население: 123</Text>
          <Text>Оборот: 123 дней</Text>
          <Text>Диаметр: 123 км</Text>
        </View>
      </View>
    </Card>

  )
}

export { PersonBox }