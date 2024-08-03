import { StyleSheet,Button, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Profile' onPress={()=>{navigation.navigate('profile')}}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    height:800,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
})