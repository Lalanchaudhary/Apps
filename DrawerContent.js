import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

    
const DrawerList = [
    { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
    { icon: 'account-multiple', label: 'Profile', navigateTo: 'Profile' },
    { icon: 'account-group', label: 'User', navigateTo: 'User' },
    { icon: 'bookshelf', label: 'Library', navigateTo: '' },
  ];

  const DrawerLayout=({icon,label,navigateTo})=>{
    const navigation=useNavigation();
    return (
        <DrawerItem icon={({color,size})=><Icon name={icon} color={color} size={size} />}
        label={label}
        onPress={()=>{navigation.navigate(navigateTo)}}
        />
    )
  }

  const DrawerItems=()=>{
    return (
        DrawerList.map((e,i)=>{
            return (
                <DrawerItem
                key={i}
                label={e.label}
                icon={e.icon}
                navigateTo={e.navigateTo}
                 />
            )
        })
    )
  }

const DrawerContent = (props) => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} >
            <DrawerItems />
        </DrawerContentScrollView>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({})