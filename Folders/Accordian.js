import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
const Accordian = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Question} >
            <Text>1.What is HTML</Text>
            <Text><Icons name='plus' size={30} color={'black'} /></Text>
        </View>
    </View>
  )
}

export default Accordian

const styles = StyleSheet.create({
    container:{
        padding:5,
        alignItems:'center',
        width:'100%'
    },
    Question:{
        width:'90%',
        padding:10,
        borderWidth:1,
        margin:10
    }
})