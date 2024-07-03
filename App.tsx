import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterForm from './Folders/RegisterForm'
import Calculator from './Folders/Calculator'
import OtpVerification from './Folders/OtpVerification'
import StopWatch from './Folders/StopWatch'
import Parent from './Folders/Parent'
import ColorChange from './Folders/ColorChange'

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        //Here you Can call any Component for checking result from folder
        <RegisterForm />
      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})