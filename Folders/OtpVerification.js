import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const OtpVerification = () => {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');

  const [count, setCount] = useState(0);

  const interval = setInterval(() => {
    if (count == 0) {
      clearInterval(interval);
    }
    else {
      setCount(count - 1);
    }
  }, 1000)
  return (
    <View style={styles.Body}>
      <Text style={styles.heading}>OTP Verification</Text>
      <View style={styles.otp_box}>
        <TextInput
          style={[styles.box, { borderColor: f1.length == 0 ? 'grey' : 'blue' }]}
          ref={box1}
          keyboardType='number-pad'
          maxLength={1}
          value={f1}
          onChangeText={txt => {
            setF1(txt)
            if (txt.length >= 1) {
              box2.current.focus();
            }
            else if (txt.length < 1) {
              box1.current.focus();
            }
          }}
        />
        <TextInput
          style={[styles.box, { borderColor: f2.length == 0 ? 'grey' : 'blue' }]}
          ref={box2}
          keyboardType='number-pad'
          maxLength={1}
          value={f2}
          onChangeText={txt => {
            setF2(txt)
            if (txt.length >= 1) {
              box3.current.focus();
            }
            else if (txt.length < 1) {
              box1.current.focus();
            }
          }}
        />
        <TextInput
          style={[styles.box, { borderColor: f3.length == 0 ? 'grey' : 'blue' }]}
          ref={box3}
          keyboardType='number-pad'
          maxLength={1}
          value={f3}
          onChangeText={txt => {
            setF3(txt)
            if (txt.length >= 1) {
              box4.current.focus();
            }
            else if (txt.length < 1) {
              box2.current.focus();
            }
          }}
        />
        <TextInput
          style={[styles.box, { borderColor: f4.length == 0 ? 'grey' : 'blue' }]}
          ref={box4}
          keyboardType='number-pad'
          maxLength={1}
          value={f4}
          onChangeText={txt => {
            setF4(txt)
            if (txt.length >= 1) {
              box5.current.focus();
            }
            else if (txt.length < 1) {
              box3.current.focus();
            }
          }}
        />
        <TextInput
          style={[styles.box, { borderColor: f5.length == 0 ? 'grey' : 'blue' }]}
          ref={box5}
          keyboardType='number-pad'
          maxLength={1}
          value={f5}
          onChangeText={txt => {
            setF5(txt)
            if (txt.length >= 1) {
              box6.current.focus();
            }
            else if (txt.length < 1) {
              box4.current.focus();
            }
          }}
        />
        <TextInput
          style={[styles.box, { borderColor: f6.length == 0 ? 'grey' : 'blue' }]}
          ref={box6}
          keyboardType='number-pad'
          maxLength={1}
          value={f6}
          onChangeText={txt => {
            setF6(txt)
            if (txt.length < 1) {
              box5.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resend_view}>
        <Text style={[styles.resend, { color: count == 0 ? 'blue' : 'grey' }]}
          onPress={() => { setCount(60) }}
        >Resend OTP</Text>
        <Text style={[styles.resend, { color: 'grey' }, { display: count == 0 ? 'none' : 'flex' }]}>{count}</Text>
      </View>

      <TouchableOpacity style={[styles.btn, { backgroundColor: f1 == '' || f2 == '' || f3 == '' || f4 == '' || f5 == '' || f6 == '' ? 'grey' : 'blue' }]}>
        <Text style={styles.verify_text}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OtpVerification

const styles = StyleSheet.create({
  Body: {
    width: '100%',
    height: 900,
    // justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginTop: 100
  },
  otp_box: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 70
  },
  box: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 8,
    textAlign:'center'
  },
  resend_view: {
    flexDirection: 'row',
  },
  resend: {
    color: 'blue',
    fontWeight: '600',
    fontSize: 15
    , marginTop: 20,
    marginLeft: 10
  },
  btn: {
    height: 40,
    width: 240,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 100
  }, verify_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
})