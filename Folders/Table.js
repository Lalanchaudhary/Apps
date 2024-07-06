import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TableCreater from './TableComponents/TableCreater';

const TableApp = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [Showtable,setShowTable]=useState(false);
  const [showMassage,setShowMassage]=useState(false);
  const [data,setData]=useState([]);
  const Roll_101=[
    ["java","06-07-2024","b-block"],
    ["DSA","08-07-2024","b-block"],
    ["C++","10-07-2024","b-block"],
]
const Roll_102=[
    ["java","06-07-2024","c-block"],
    ["DSA","08-07-2024","c-block"],
    ["C++","10-07-2024","c-block"],
]
const Roll_103=[
    ["java","06-07-2024","d-block"],
    ["DSA","08-07-2024","d-block"],
    ["C++","10-07-2024","d-block"],
]
const Roll_104=[
    ["java","06-07-2024","U-zone"],
    ["DSA","08-07-2024","U-zone"],
    ["C++","10-07-2024","U-zone"],
]
const HandleSubmit=()=>{
    switch(rollNumber)
    {
        case '101':
            setData(Roll_101);
            setShowTable(true);
            break;
        case '102':
            setData(Roll_102);
            setShowTable(true);
            break;
        case '103':
            setData(Roll_103);
            setShowTable(true);
            break;       
        case '104':
            setData(Roll_104);
            setShowTable(true);
            break;
        default :
        setShowMassage(true);
        break;                    
    }
}
  return (
    <View style={styles.container}>
        <TextInput
          keyboardType='number-pad'
          style={styles.InputBox}
          placeholder='Enter your Roll number'
          value={rollNumber}
          onChangeText={txt=>setRollNumber(txt)}
        />
        <TouchableOpacity style={styles.Submit_btn} onPress={HandleSubmit}>
            <Text style={styles.Submit_Text}>Submit</Text>
        </TouchableOpacity>
        {
            showMassage===true?<Text style={{textAlign:'center',color:'red'}}>This Roll no Doesn't exit. (fill 101 to 104)</Text>:''

        }
        {
         Showtable===true?<TableCreater data={data}/>:''  
        }

    </View>
  );
}

export default TableApp;

const styles = StyleSheet.create({
    container: {
        height: 900,
        width: '100%',
        padding:20
    },
    InputBox: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%', 
        padding: 10, 
        borderRadius: 5, 
        marginHorizontal:'auto',
        marginTop:100
    },
    Submit_btn:{
        width:'80%',
        height:40,
        backgroundColor:'#1f69f0',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        marginHorizontal:'auto'
    },
    Submit_Text:{
        fontWeight:'bold',
        color:'white',
        fontSize:16
    }
});
