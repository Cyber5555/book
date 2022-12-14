import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import Eye from "../../../assets/NavIcons/Eye"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function NewPassword({ navigation }) {

  const [eyePassword, setEyePassword] = useState(false)
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false)



  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('ForgetPasswordCode')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>Восстановление</Text>
        </View>

        <Text style={styles.pageInfo}>
          Придумайте сложный пароль,содержащий{'\n'}
          строчные и прописные буквы
        </Text>


        <View style={{ position: 'relative' }}>
          <TextInput
            style={styles.newPassword}
            placeholder="новый пароль"
            placeholderTextColor={'#AF9EA0'}
            passwordRules={true}
            secureTextEntry={!eyePassword}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => {
              setEyePassword(!eyePassword)
            }}>
            <Eye boolEye={eyePassword}/>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'relative' }}>
          <TextInput
            style={styles.newPassword}
            placeholder="повторите пароль"
            placeholderTextColor={'#AF9EA0'}
            passwordRules={true}
            secureTextEntry={!eyeConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => {
              setEyeConfirmPassword(!eyeConfirmPassword)
            }}>
            <Eye boolEye={eyeConfirmPassword}/>
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            navigation.navigate('AccountUser')
          }}>
          <MainButton text={'подтвердить'} />
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

  newPassword: {
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 15,
    fontSize: 15
  },
  pageInfo: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#553241',
    marginTop: 19,
    marginBottom: 28
  },
  confirmButton: {
    marginTop: 50
  },
  eye: {
    position: 'absolute',
    top: 22,
    right: 10,
  }

})