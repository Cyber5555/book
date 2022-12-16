import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function ForgetPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('Login')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>Восстановление</Text>
        </View>

        <Text style={styles.infoPage}>Мы отправим 4-х значный код на вашу{'\n'} эл.почту для подтверждения личности</Text>

        <TextInput
          style={styles.emailInput}
          placeholder="эл.почта"
          keyboardType="email-address"
          placeholderTextColor={'#AF9EA0'}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate('ForgetPasswordCode')
          }}>
          <MainButton text={'отправить код'} />
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

  emailInput: {
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 30,
    fontSize: 15,
    color: '#553241'
  },
  loginButton: {
    marginTop: 32
  },
  infoPage: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 19,
    color: '#553241'
  }

})