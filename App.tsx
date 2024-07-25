import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView,Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterForm from './Folders/RegisterForm';
import Calculator from './Folders/Calculator';
import OtpVerification from './Folders/OtpVerification';
import StopWatch from './Folders/StopWatch';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import DrawerContent from './DrawerContent';
import DraweDesign from './Components/DraweDesign';
import lalan from './Assets/lalan.jpg';
import { TextInput } from 'react-native-gesture-handler';
import Primary from './Screens/Primary';
import Promotion from './Screens/Promotion';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='profile' component={Profile} />
      <Stack.Screen name='Primary' component={Primary} />
      <Stack.Screen name='Promotion' component={Promotion} />
    </Stack.Navigator>
  )
}


const TabNav = () => {
  const navigation=useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarShowLabel: false, // Hide the default text labels
        // headerStyle:styles.header1,
        header:()=>{
          return (
            <View style={styles.container2}>
            <View style={styles.icons_View}>
            <Icon2 name='bars' size={25} color={'black'} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} />
            <TextInput placeholder='Search in mail'  />
            </View>
            <Image source={lalan} style={styles.profile} />
        </View>
          )
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon_View}>
              <Icon1 name="email" size={22} color={focused ? 'black' : 'grey'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon_View}>
              <Icon name="video" size={22} color={focused ? 'black' : 'grey'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown:false
        }}
      >
      <Drawer.Screen name='TabNav' component={TabNav} />
       <Drawer.Screen name='StackNav' component={StackNav} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_View: {
    alignItems: 'center',
    justifyContent: 'center',

    gap: 1,
  },
  header1:{
    width:'92%',
    backgroundColor:'red',
    height:50,
    position:'absolute',
    top:20,
    left:'4%'
  },


  container2:{
    width:'92%',
    height:55,
    backgroundColor:'white',
    position:'absolute',
    left:'4%',
    alignItems:'center',
    paddingHorizontal:20,
    borderRadius:30,
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
});
