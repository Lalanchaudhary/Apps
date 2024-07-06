import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Table,Row,Rows} from 'react-native-table-component'
const TableCreater = ({data}) => {
    const header=["Subject","Date","Venue"]

  return (
    <View>
        <Text style={{textAlign:'center',fontSize:18,margin:10,fontWeight:'bold'}}>Time Table</Text>
        <Table borderStyle={{borderWidth:1,boderColor:'grey'}}>
            <Row textStyle={{textAlign:'center',color:'blue'}} data={header} />
            <Rows textStyle={{textAlign:'center',color:'blue'}} data={data} />

        </Table>
    </View>
  )
}

export default TableCreater

const styles = StyleSheet.create({})