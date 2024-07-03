import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const ColorChange = () => {
    const ColorsSchema = ['red', 'green', 'blue', 'yellow', 'orange'];
    const [color, setColor] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(ColorsSchema[count]);
            setCount((prevCount) => (prevCount + 1) % ColorsSchema.length);
        }, 1000);

        return () => clearInterval(interval); 
    }, [count, ColorsSchema]);

    return (
        <View style={[styles.container,{backgroundColor:color}]}>

        </View>
    );
};

export default ColorChange;

const styles = StyleSheet.create({
    container: {
        height:900,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
