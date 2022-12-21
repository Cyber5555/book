import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Eye from "../../../assets/NavIcons/Eye"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"
import { registration } from "../../redux/action/signUpAction"


export default function Registration({ navigation }) {

  const dispatch = useDispatch()

  const registration_errors = useSelector(store => store.signUpReducer.register_validation)
  const registration_success = useSelector(store => store.signUpReducer.register_success)



  const [eyePassword, setEyePassword] = useState(false)
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')


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
          style={[styles.inputs, registration_errors.name_error ? { borderColor: 'red' } : { borderColor: '#AF9EA0' }]}
          placeholder="имя"
          placeholderTextColor={'#AF9EA0'}
          value={name}
          onChangeText={(e) => { setName(e) }}
        />


        <TextInput
          style={[styles.inputs, registration_errors.email_error ? { borderColor: 'red' } : { borderColor: '#AF9EA0' }]}
          placeholder="эл.почта"
          placeholderTextColor={'#AF9EA0'}
          keyboardType="email-address"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />

        <View style={{ position: 'relative' }}>
          <TextInput
            style={[styles.inputs, registration_errors.password_error ? { borderColor: 'red' } : { borderColor: '#AF9EA0' }]}
            placeholder="новый пароль"
            placeholderTextColor={'#AF9EA0'}
            passwordRules={true}
            secureTextEntry={!eyePassword}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => {
              setEyePassword(!eyePassword)
            }}>
            <Eye boolEye={eyePassword} />
          </TouchableOpacity>
        </View>

        <View style={{ position: 'relative' }}>
          <TextInput
            style={[styles.inputs, registration_errors.password_confirmation_error ? { borderColor: 'red' } : { borderColor: '#AF9EA0' }]}
            placeholder="повторите пароль"
            placeholderTextColor={'#AF9EA0'}
            passwordRules={true}
            secureTextEntry={!eyeConfirmPassword}
            value={password_confirmation}
            onChangeText={(e) => setPassword_confirmation(e)}
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => {
              setEyeConfirmPassword(!eyeConfirmPassword)
            }}>
            <Eye boolEye={eyeConfirmPassword} />
          </TouchableOpacity>
        </View>



        <TouchableOpacity
          style={styles.regButt}
          onPress={async () => {
            let raw = JSON.stringify({
              "name": name,
              "email": email,
              "password": password,
              "password_confirmation": password_confirmation
            });
            dispatch(registration(raw)).then(() => {

              if (registration_success.success === true) {
                navigation.navigate('ConfirmRegister')
              }

            })

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
    fontWeight: "700",
    color: '#553241'
  },
  //  standarts

  inputs: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 15,
    fontSize: 15,
    color: '#553241'
  },
  regButt: {
    marginTop: 60,

  },
  eye: {
    position: 'absolute',
    top: 22,
    right: 10,
  }

})