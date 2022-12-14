import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from "react-native"
import GoBack from "../../assets/NavIcons/GoBack"
import MainButton from "../../assets/NavIcons/MainButton"


export default function AuthScreenComponent({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('StartAndBook')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>профиль</Text>
        </View>

        {/* buttons */}

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('Login')
          }}>
          <MainButton text={'войти'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('Registration')
          }}>
          <MainButton text={'зарегистрироваться'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('FeedBack')
          }}>
          <MainButton text={'обратная связь'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('AboutTheApplication')
          }}>
          <MainButton text={'о приложении'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <MainButton text={'отключить рекламу'} />
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
    marginBottom: 17
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
  // standarts


  buttons: {
    marginTop: 15
  }
})