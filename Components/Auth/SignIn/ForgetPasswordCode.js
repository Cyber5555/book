import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function ForgetPasswordCode({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('ForgetPassword')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>Восстановление</Text>
        </View>

        <Text style={styles.infoPage}>Введите код подтверждения</Text>

        <TextInput
          style={styles.emailInput}
          placeholder="код подтверждения"
          keyboardType="number-pad"
        />

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            navigation.navigate('NewPassword')
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
    fontWeight: "400"
  },
  //  standarts

  emailInput: {
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    marginTop: 49,
    fontSize: 15
  },
  confirmButton: {
    marginTop: 50
  },
  infoPage: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 19,
    color: '#553241'
  }

})