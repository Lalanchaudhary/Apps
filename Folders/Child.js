import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Child = ({University,Courses}) => {
  return (
    <View style={styles.Body}>
        <Text style={styles.heading}>University Name : {University}</Text>
        <View style={styles.Courses_view}>
              <Text style={styles.heading}>Courses:</Text>
              {
              Courses.map((e)=>{
                return <Text>{e}</Text>
              })
              }
              </View>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({
    Body:{
        padding:20
    },
    heading:{
        fontSize:20,
        fontWeight:'700'
    },Courses_view:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    }
})