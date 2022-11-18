import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import GoBack from "../../assets/NavIcons/GoBack"
import MainButton from "../../assets/NavIcons/MainButton"


export default function AboutTheApplication({ navigation }) {
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

          <Text style={styles.title}>о приложении</Text>
        </View>

        <View style={styles.AboutParent}>
          <Text style={styles.AboutText}>
            Есть над чем задуматься: стремящиеся
            вытеснить традиционное производство,
            нанотехнологии и по сей день остаются
            уделом либералов, которые жаждут быть
            заблокированы в рамках своих собственных
            рациональных ограничений. Сложно и сказать,
            почему ключевые особенности структуры
            проекта и по сей день остаются уделом
            либералов, которые жаждут быть представлены
            в исключительно для себя
          </Text>
        </View>

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

  AboutParent: {
    borderWidth: 1,
    borderColor: '#553241',
    borderRadius: 10,
    padding: 10,
    marginTop: 32
  },
  AboutText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#553241'
  }

})