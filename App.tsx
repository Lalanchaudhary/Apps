import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterForm from './Folders/RegisterForm'
import Calculator from './Folders/Calculator'
import OtpVerification from './Folders/OtpVerification'
import StopWatch from './Folders/StopWatch'
import Parent from './Folders/Parent'
import ColorChange from './Folders/ColorChange'
import Table from './Folders/Table'
import Redio_btns from './Folders/Redio_btns'

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        {/* //Here you Can call any Component for checking result from folder */}
        <Redio_btns />

      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})