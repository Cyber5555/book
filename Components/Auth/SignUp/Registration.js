import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function Registration({ navigation }) {
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

          <Text style={styles.title}>Регистрация</Text>
        </View>

        <TextInput
          style={styles.inputs}
          placeholder="имя"
        />


        <TextInput
          style={styles.inputs}
          placeholder="эл.почта"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.inputs}
          placeholder="пароль"
          secureTextEntry={true}
          passwordRules={true}
        />

        <TextInput
          style={styles.inputs}
          placeholder="повтор пароля"
          secureTextEntry={true}
          passwordRules={true}
        />



        <TouchableOpacity
          style={styles.regButt}
          onPress={() => {
            navigation.navigate('ConfirmRegister')
          }}>
          <MainButton text={'зарегистрироваться'} />
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

  inputs: {
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 15,
    fontSize: 15
  },
  regButt: {
    marginTop: 60,
    
  }

})