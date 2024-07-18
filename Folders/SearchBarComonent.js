import { StyleSheet, Text, View,TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
const SearchBarComonent = () => {
    const [search,setSearch]=useState('');
    const Students=[
        {
            id:"1",
            name:"Lalan",
            email:"lalan28@gmail.com",
            Roll_no:101
        },
        {
            id:"2",
            name:"Himachal",
            email:"Himachal1234@gmail.com",
            Roll_no:102
        },
        {
            id:"3",
            name:"Prashant",
            email:"prashant1234@gmail.com",
            Roll_no:103
        },
        {
            id:"4",
            name:"Nikhil",
            email:"nikhil1234@gmail.com",
            Roll_no:104
        },
        {
            id:"5",
            name:"Aryan",
            email:"aryan1234@gmail.com",
            Roll_no:105
        },
        {
            id:"6",
            name:"Sujal",
            email:"sujal1234@gmail.com",
            Roll_no:106
        },
        {
            id:"7",
            name:"Harshit",
            email:"harshit1234@gmail.com",
            Roll_no:107
        },
        {
            id:"8",
            name:"vasu",
            email:"vasu1234@gmail.com",
            Roll_no:108
        },
    ]
    const [allData,setAllData]=useState(Students);

    useEffect(() => {
        const filteredData = Students.filter(student =>
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.email.toLowerCase().includes(search.toLowerCase()) ||
            student.Roll_no.toString().includes(search)
        );
        setAllData(filteredData);
    }, [search]);

    const renderItem1=({item})=>(
        <View style={styles.List_View}>
            <Text >{item.name}</Text>
            <Text >{item.email}</Text>
            <Text >{item.Roll_no}</Text>
        </View>
    );

  return (
    <ScrollView>
    <View style={styles.container}>
        <TextInput style={styles.search_box} value={search}  onChangeText={txt=>{setSearch(txt)}} placeholder='Search here ...' />
        <View style={[styles.List_View,{marginVertical:10}]}>
            <Text style={styles.List_Text}>Name</Text>
            <Text style={styles.List_Text}>Email</Text>
            <Text style={styles.List_Text}>Roll no.</Text>
        </View>
        <FlatList data={allData} renderItem={renderItem1} keyExtractor={(item)=>item.id} />
    </View>
    </ScrollView>
  )
}

export default SearchBarComonent

const styles = StyleSheet.create({
    container:{
        padding:20,
        // justifyContent:'center',
        // alignItems:'center'
    },
    search_box:{
        padding:5,
        borderWidth:1,
        paddingHorizontal:20,
        borderRadius:10,
        marginBottom:20
    },
    List_View:{
        padding:5,
        borderWidth:1,
        flexDirection:'row',
        flexWrap:'wrap',
        margin:5,
        justifyContent:'space-between'
    },
    List_Text:{
        fontWeight:'bold'
    }
})