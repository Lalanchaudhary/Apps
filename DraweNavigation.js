import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import Home from './Screens/Home';
import DrawerContent from './DrawerContent';
const DraweNavigation = () => {
  const Drawer=createDrawerNavigator();
  return (
    <Drawer.Navigator
    drawerContent={props=><DrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )
}

export default DraweNavigation

const styles = StyleSheet.create({})