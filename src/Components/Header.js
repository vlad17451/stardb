import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';



class Header extends Component {

  render() {
    return (
      <View style={styles.head}>
        <Text style={styles.head__title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head: {
    height: 100,
    color: 'white',
    backgroundColor: '#000000',
    justifyContent: "flex-end",
    alignItems: "center"
  },
  head__title: {
    height: 50,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  }
});

export { Header }