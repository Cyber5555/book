import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, ScrollView } from "react-native"
import GoBack from "../../../assets/NavIcons/GoBack"
import MainButton from "../../../assets/NavIcons/MainButton"


export default function AccountUser({ navigation }) {
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

          <View style={styles.userName}>
            <Text style={styles.userNameText}>Dale Cooper</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.feedTextBox}>
            <Text style={styles.feedText}>обратная связь</Text>
          </View>

          <View style={styles.feedBackParent}>
            <TextInput
              style={styles.feedBackInput}
              textAlignVertical="top"
              multiline
              underlineColorAndroid='transparent'
            />

            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>отправить</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.feedTextBox}>
            <Text style={styles.feedText}>о приложении</Text>
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
        </ScrollView>
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
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    marginBottom: 5
  },
  GoBack: {
    marginRight: 7
  },
  title: {
    fontSize: 22,
    fontWeight: "400"
  },
  //  standarts

  userName: {
    height: 35,
    width: '88%',
    borderWidth: 1,
    borderColor: '#AF9EA0',
    backgroundColor: '#EDEAE4',
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 20
  },
  userNameText: {
    fontWeight: '400',
    fontSize: 17,
    color: '#A69496'
  },
  feedBackParent: {
    width: '90%',
    height: 207,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderTopWidth: 0,
    alignSelf: 'center'
  },
  feedBackInput: {
    width: '100%',
    height: 170,
    paddingHorizontal: 20,
    color: '#553241'
  },
  sendButton: {
    width: '100%',
    height: 37,
    backgroundColor: '#48BF85',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendButtonText: {
    fontSize: 19,
    fontWeight: '400',
    color: '#553241'
  },
  feedTextBox: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  feedText: {
    fontWeight: '400',
    fontSize: 19,
    color: '#553241'

  },
  AboutParent: {
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderTopWidth: 0,
  },
  AboutText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#553241'
  }


})