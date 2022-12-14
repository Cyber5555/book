import React, { useState } from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"
import { confirmRegister } from "../../redux/action/signUpAction"


export default function ConfirmRegister({ navigation }) {

  const [confirm, setConfirm] = useState()
  const dispatch = useDispatch()
  const verify_success = useSelector(store => store.signUpReducer.verify_success)


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('Registration')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>Регистрация</Text>
        </View>


        <Text style={styles.pageInfo}>
          Мы отправим 4-х значный код на вашу{'\n'}
          эл.почту для подтверждения личности
        </Text>

        <TextInput
          style={[styles.confirmInput, verify_success === false ? { borderColor: 'red' } : { borderColor: '#AF9EA0' }]}
          placeholder="код подтверждения"
          placeholderTextColor={'#AF9EA0'}
          keyboardType="number-pad"
          maxLength={4}
          value={confirm}
          onChangeText={(e) => setConfirm(e)}
        />



        <TouchableOpacity
          style={styles.regButt}
          onPress={() => {
            let raw = JSON.stringify({
              "verified_code": confirm,
            });
            dispatch(confirmRegister(raw)).then(() => {

              if (verify_success.success === true) {
                navigation.navigate('SuccessfulRegister')
              }

            })
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

  pageInfo: {
    marginTop: 19,
    textAlign: 'center',
    color: '#553241'
  },
  confirmInput: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 30,
    color: '#553241'
  },
  regButt: {
    marginTop: 50
  }
})