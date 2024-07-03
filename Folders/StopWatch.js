import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [miliSec, setMiliSec] = useState(0);
    const intervalRef = useRef(0);

    const Start = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setMiliSec(prevMiliSec => {
                if (prevMiliSec === 99) {
                    setSec(prevSec => {
                        if (prevSec === 59) {
                            setMin(prevMin => prevMin + 1);
                            return 0;
                        } else {
                            return prevSec + 1;
                        }
                    });
                    return 0;
                } else {
                    return prevMiliSec + 1;
                }
            });
        }, 10); 
    };

    const Stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };


    const ClearTime = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setMiliSec(0);
        setSec(0);
        setMin(0);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current); // Clear the interval when the component unmounts
    }, []);

    return (
        <View style={styles.body}>
            <View style={styles.clock_Container}>
                <Text style={[styles.Second, { display: min < 10 ? 'flex' : 'none' }]}>0</Text>
                <Text style={styles.Second}>{min}</Text>
                <Text style={styles.Second}>:</Text>
                <Text style={[styles.Second, { display: sec < 10 ? 'flex' : 'none' }]}>0</Text>
                <Text style={styles.Second}>{sec}.</Text>
                <Text style={styles.miliSecond}>{miliSec}</Text>
            </View>
            <View style={styles.btn_view}>
                <TouchableOpacity style={styles.start_btn} onPress={Start}>
                    <Text style={styles.btn_text}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.start_btn,{backgroundColor:'#d4d4d4'}]} onPress={ClearTime}>
                    <Text style={styles.btn_text}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.start_btn,{backgroundColor:'red'}]} onPress={Stop}>
                    <Text style={styles.btn_text}>Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default StopWatch;

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 900,
        alignItems: 'center'
    },
    clock_Container: {
        height: 100,
        width: 250,
        backgroundColor: '#d4d4d4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 100,
        marginBottom: 100,
        borderRadius: 10
    },
    Second: {
        fontSize: 40,
        color: 'black'
    },
    miliSecond: {
        fontSize: 12,
        // marginLeft: 10,
        marginTop: 20,
        color: 'black',
        fontWeight: '600'
    },
    btn_view: {
        flexDirection: 'row',
        gap: 40
    },
    start_btn: {
        height: 50,
        width: 100,
        borderRadius: 7,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    }
});

