import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterForm from './Folders/RegisterForm';
import Calculator from './Folders/Calculator';
import OtpVerification from './Folders/OtpVerification';
import StopWatch from './Folders/StopWatch';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './Screens/Home';
import Profile from './Screens/Profile';

const Tab = createBottomTabNavigator();
const Drawer=createDrawerNavigator();

const TabNav=()=>{
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.container,
      tabBarShowLabel: false, // Hide the default text labels
      headerShown:false
    }}
  >
    <Tab.Screen
      name="Register"
      component={RegisterForm}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.icon_View}>
            <Icon name="home" size={22} color={focused?'red':'grey'} />
            <Text style={{ color: focused ? 'tomato' : 'black' }}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="OTP"
      component={OtpVerification}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.icon_View}>
            <Icon name="lock" size={22} color={focused?'red':'grey'} />
            <Text style={{ color: focused ? 'tomato' : 'black' }}>OTP</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Calculator"
      component={Calculator}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.icon_View}>
            <Icon name="calculator" size={22} color={focused?'red':'grey'} />
            <Text style={{ color: focused ? 'tomato' : 'black' }}>Calculator</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="StopWatch"
      component={StopWatch}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.icon_View}>
            <Icon name="clockcircleo" size={22} color={focused?'red':'grey'} />
            <Text style={{ color: focused ? 'tomato' : 'black' }}>StopWatch</Text>
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
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    height: 70,
    width: '90%',
    left: '5%',
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_View: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
});
