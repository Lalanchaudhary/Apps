import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'

const Redio_btns = () => {
    const [selectedValue, setSelectedValue] = useState('Male');

    const HandleChange=(e)=>{
        switch (e) {
            case 'Male':
                setSelectedValue('Male')
                break;
                case 'FeMale':
                    setSelectedValue('FeMale')
                    break;
                    case 'Others':
                        setSelectedValue('Others')
                        break;
            default:
                break;
        }
    }
    return (
        <View style={styles.Container}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Gender</Text>
            <View style={styles.radioGroup}>
                <View style={styles.RadioBtn}>
                    <RadioButton
                        value='Male'
                        status={selectedValue === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => { HandleChange('Male') }}
                        color='grey'
                    />
                    <Text>Male</Text>
                </View>

                <View style={styles.RadioBtn}>
                    <RadioButton
                        value='FeMale'
                        status={selectedValue === 'FeMale' ? 'checked' : 'unchecked'}
                        onPress={() => { HandleChange('FeMale') }}
                        color='grey'
                    />
                    <Text>Female</Text>                    
                </View>

                <View style={styles.RadioBtn}>
                    <RadioButton
                        value='Others'
                        status={selectedValue === 'Male' ? 'Others' : 'unchecked'}
                        onPress={() => { HandleChange('Others') }}
                        color='grey'
                    />
                    <Text>Others</Text>
                </View>
            </View>



        </View>
    )
}

export default Redio_btns

const styles = StyleSheet.create({
    Container: {
        height: 900,
        width: '100%',
        padding: 20
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    RadioBtn: {
        // flexDirection: 'row',
        alignItems: 'center',
    }
})