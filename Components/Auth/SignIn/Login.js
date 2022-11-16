import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function Login({ navigation }) {
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
          keyboardType="email-address"
        />

        <TextInput
          style={styles.loginInput}
          placeholder="пароль"
          secureTextEntry={true}
          passwordRules={true}
        />

        <Text
          style={styles.forgetPasswordText}
          onPress={() => {
            navigation.navigate('ForgetPassword')
          }}>
          Забыли пароль
        </Text>

        <TouchableOpacity style={styles.loginButton}>
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
    fontWeight: "400"
  },
  //  standarts

  loginInput: {
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 15
  },
  forgetPasswordText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'right',
    color: '#A69496',
    marginTop: 8
  },
  loginButton: {
    marginTop: 32
  }

})