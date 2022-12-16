import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import Eye from "../../../assets/NavIcons/Eye"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function Login({ navigation }) {

  const [eyeBool, setEyeBool] = useState(false)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('AuthScreen')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>Вход</Text>
        </View>


        <TextInput
          style={styles.loginInput}
          placeholder="эл.почта"
          placeholderTextColor={'#AF9EA0'}
          keyboardType="email-address"
          passwordRules={true}
        />


        <View style={{ position: 'relative' }}>
          <TextInput
            style={styles.loginInput}
            placeholder="пароль"
            placeholderTextColor={'#AF9EA0'}
            secureTextEntry={!eyeBool}
            passwordRules={true}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setEyeBool(!eyeBool)}>
            <Eye boolEye={eyeBool} />
          </TouchableOpacity>
        </View>

        <Text
          style={styles.forgetPasswordText}
          onPress={() => {
            navigation.navigate('ForgetPassword')
          }}>
          Забыли пароль
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('StartAndBook')
          }}>
          <MainButton text={'войти'} />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAF0',
    paddingHorizontal: 20
  },
  titleBox: {
    position: 'relative',
    marginTop: 13,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    marginBottom: 25
  },
  GoBack: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: '#553241'
  },
  //  standarts

  loginInput: {
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 15,
    fontSize: 15,
    color: '#553241'
  },
  forgetPasswordText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'right',
    color: '#A69496',
    marginTop: 8,
    textDecorationLine: "underline",
    textDecorationColor: '#A69496'
  },
  loginButton: {
    marginTop: 32
  },
  eye: {
    position: 'absolute',
    top: 22,
    right: 10,
  }

})