import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, TextInput, } from "react-native"
import GoBack from "../../assets/NavIcons/GoBack"
import MainButton from "../../assets/NavIcons/MainButton"


export default function FeedBack({ navigation }) {
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

          <Text style={styles.title}>обратная связь</Text>
        </View>

        <TextInput
          style={styles.name}
          placeholder="имя"
          placeholderTextColor={'#AF9EA0'}
        />

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
  // standarts


  
  name: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AF9EA0',
    marginTop: 32,
    paddingLeft: 20,
    fontSize: 15
  },
  feedBackParent: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AF9EA0',
    marginTop: 20,
  },
  feedBackInput: {
    width: '100%',
    height: 182,
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
  }
})