import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style = {styles.background}>
      <Image style={styles.img} source={require('../Image/shoes_2.jpg')}/>

      <ActivityIndicator color={'black'}/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        gap: 30,
        justifyContent: 'center'
    },
    img: {
        width: 260,
        height: 260,
    }
})