import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-gesture-handler'
import lalan from '../Assets/lalan.jpg'
import { DrawerActions, useNavigation } from '@react-navigation/native'
const DraweDesign = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.icons_View}>
        <Icon name='bars' size={25} color={'black'} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} />
        <TextInput placeholder='Search in mail' />
        </View>
        <Image source={lalan} style={styles.profile} />
    </View>
  )
}

export default DraweDesign

const styles = StyleSheet.create({
    container:{
        width:'92%',
        height:55,
        backgroundColor:'white',
        position:'absolute',
        left:'4%',
        alignItems:'center',
        paddingHorizontal:20,
        borderRadius:30,
        position:'absolute',
        top:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icons_View:{
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },
    profile:{
        height:36,
        width:36,
        borderRadius:18
    }
})