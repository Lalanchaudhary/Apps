import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Child from './Child';

const Parent = () => {

    const Chandigarh=["B.tech","BCA","Diploma"];
    const Chitkara=["M.tech","MCA","PHD"];
    const Sviet=["B.tech","B.Pharma","RadioLogy"];
  return (
    <View>
        <Child University="Chandigarh" Courses={Chandigarh} />
        <Child University="Chitkara" Courses={Chitkara} />
        <Child University="Chitkara" Courses={Chitkara} />
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})