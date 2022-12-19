import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Storage = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={{paddingLeft: 20}}>
        <Text>{title}</Text>
        <Text style={styles.day}>17 April 2017</Text>
        <Text style={styles.desc}>Files: 75 items: 620 Used:60GB</Text>
      </View>
    </View>
  )
}

export default Storage

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 80,
    flex: 1,
    backgroundColor: '#f4f5f3',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  day: {
    fontSize: 12,
    color: '#d8d8d8',
  },
  desc: {
    fontSize: 11,
  },
})
