import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import validate from 'react-native-email-validator';
const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  })
  const [errors, setErrors] = useState({
  });
  const [isValidForm, setIsValidForm] = useState(false);
  const reset = () => {
    setData(
      {
        name: "",
        email: "",
        password: "",
        confirm: ""
      }
    )
  }

  const FormValidate = () => {
    if (data.name === '') setErrors({ name: "Name is Required" })
    if (data.email === '') setErrors({ name: "Name is Required" })
  }
  const Submit = () => {
    Alert.alert("Register Success")
  }
  const NameHandle = (txt) => {
    setData({ ...data, name: txt })
    if (data.name = '') {
      setErrors({ name: "Name is Required" })
    }
    else
    {
      setErrors({ name:'' })
    }
  }

  const EmailHandle = (txt) => {
    setData({ ...data, email: txt })
    validate(data.email) ? setErrors({ email: '' }) : setErrors({ email: "Email is Invalid" })
  }

  const PasswordHandle = (txt) => {
    setData({ ...data, password: txt })
    if (data.password === '') {
      setErrors({ password: "Password is required" })
    }
    if (data.password.length < 8) {
      setErrors({ passwordLength: "Password must contain minimum 8 letters" })
    }
    else
    {
      setErrors({passwordLength:''})
    }
  }

  const ConfirmPasswordHandle=(txt)=>{
    setData({...data,confirm:txt});
    if(data.confirm!=data.password)
    {
      setErrors({confirm:"Password is not same"})
    }
    else
    {
      setErrors({confirm:''})
    }
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.upper_Box}>
            <Text style={[styles.heading2, { color: 'white' }]}>Welcome Users !</Text>
          </View>
          <Text style={styles.heading}>Register</Text>
          <View style={styles.formBox}>
            <View>
              <Text style={{ color: 'black', fontWeight: 'bold', margin: 5, marginHorizontal: 10 }}>Name</Text>
              <TextInput style={styles.name_box} value={data.name} onChangeText={txt => { NameHandle(txt) }} placeholder='Full Name' />
              <Text style={styles.error_text}>{errors.name}</Text>
            </View>
            <View>
              <Text style={{ color: 'black', fontWeight: 'bold', margin: 5, marginHorizontal: 10 }}>Email</Text>
              <TextInput keyboardType='email-address' value={data.email} onChangeText={txt => { EmailHandle(txt) }} autoCapitalize='none' style={styles.name_box} placeholder='Email' />
              {
                errors.email === '' ? '' : <Text style={styles.error_text}>{errors.email}</Text>
              }
            </View>
            <View>
              <Text style={{ color: 'black', fontWeight: 'bold', margin: 5, marginHorizontal: 10 }}>Password</Text>
              <TextInput secureTextEntry style={styles.name_box} value={data.password} onChangeText={txt => { PasswordHandle(txt) }} placeholder='Password' />
                <Text style={styles.error_text}>{errors.passwordLength}</Text>
            </View>
            <View>
              <Text style={{ color: 'black', fontWeight: 'bold', margin: 5, marginHorizontal: 10 }}>Confirm Password</Text>
              <TextInput secureTextEntry style={styles.name_box} value={data.confirm} onChangeText={txt => {ConfirmPasswordHandle(txt) }} placeholder='Confirm Password' />
              <Text style={styles.error_text}>{errors.confirm}</Text>
            </View>
            <View style={styles.btn_box}>
              <TouchableOpacity style={styles.first_btn}  onPress={Submit}><Text style={styles.btn_text}>Submit</Text></TouchableOpacity>
              <TouchableOpacity style={styles.first_btn} onPress={reset}><Text style={styles.btn_text}>Reset</Text></TouchableOpacity>
            </View>
            <Text style={styles.last_text}>Do you have an account? Sign in</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default RegisterForm

const styles = StyleSheet.create({
  upper_Box: {
    width: 530,
    height: 530,
    borderWidth: 1,
    borderRadius: 265,
    position: 'relative',
    bottom: 370,
    right: 50,
    backgroundColor: '#902b95',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30
  },
  body: {
    height: 900,
    // backgroundColor:'lightblue',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    position: 'relative',
    bottom: 350,
    color: '#9c1f83'
  },
  heading2: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  formBox: {
    height: '80%',
    position: 'relative',
    bottom: 350,
    paddingHorizontal: 20,
    alignItems: 'center',
    cursor: 'pointer',
  },
  name_box: {
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    borderRadius: 25,
    cursor: 'pointer',
    // marginBottom:15
  },
  first_btn: {
    backgroundColor: '#9c1f83',
    fontSize: 16,
    width: 120,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  btn_text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  btn_box: {
    flexDirection: 'row',
    gap: 20,
    margin: 30
  },
  last_text: {
    color: '#9c1f83',
    fontWeight: 'bold'
  },
  error_text: {
    color: 'red',
    fontSize: 11,
    margin: 5,
    marginLeft: 20
  },

})