import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

const Button = ({ label, onPress }) => (
    <TouchableOpacity style={styles.btn} onPress={() => onPress(label)}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
);

const Calculator = () => {
    const [data, setData] = useState("0");

    const handlePress = (input) => {
        // Basic handling of button presses
        if (input === 'AC') {
            setData("0");
        } else if (input === '=') {
            try {
                setData(eval(data).toString());
            } catch (e) {
                setData("Error");
            }
        } else if (input === 'C') {
            setData(data.slice(0, -1) || "0");
        } else {
            setData((data === "0" ? "" : data) + input);
        }
    };

    return (
        <View style={styles.main_body}>
            <View style={styles.Display}>
                <Text style={{ fontSize: 40 }}>{data}</Text>
            </View>
            <View style={styles.All_btns}>
                {[
                    ['AC', '%', '/', 'C'],
                    ['7', '8', '9', 'X'],
                    ['4', '5', '6', '-'],
                    ['1', '2', '3', '+'],
                    ['+/-', '0', '.', '=']
                ].map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row} >
                        {row.map((label) => (
                            <Button key={label} label={label} onPress={handlePress}  />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Calculator;

const styles = StyleSheet.create({
    main_body: {
        height: 900,
        width: '100%',
        padding: 20,
        borderWidth: 1,
        paddingVertical: 40,
        backgroundColor: '#edebed',
    },
    Display: {
        height: 200,
        borderWidth: 1,
        borderRadius: 30,
        marginTop: 50,
        marginBottom: 30,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
        backgroundColor: 'white',
    },
    All_btns: {
        width: '100%',
        height: 550,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    btn: {
        height: 70,
        width: 70,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
