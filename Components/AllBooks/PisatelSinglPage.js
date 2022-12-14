import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Image, } from "react-native"
import Counter from "../../assets/NavIcons/Counter"
import GoBack from "../../assets/NavIcons/GoBack"


export default function PisatelSinglPage({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleBox}>

          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('AllBook')
            }}>
            <GoBack />
          </TouchableOpacity>

          <Text style={styles.title}>Толстой Лев{'\n'}Николаевич</Text>
        </View>

        <Image source={require('../../assets/image/image1.png')} style={styles.userIcon} />

        <View style={styles.progressParent}>
          <View style={styles.progressValue}>

          </View>
          <Text style={styles.progressPercent}>37%</Text>
        </View>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {

          }}>
          <Text style={styles.buttonsText}>Информация</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('Biblografia')
          }}>
          <Text style={styles.buttonsText}>Библиография</Text>
          <Counter counterText={50} />
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
  },
  GoBack: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#553241"
  },
  //  standarts


  buttons: {
    marginTop: 15,
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingLeft: 13,
    backgroundColor: '#EDEAE4',
    borderWidth: 1,
    borderColor: '#AF9EA0',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row"
  },
  buttonsText: {
    color: '#A69496',
    fontSize: 20,
    fontWeight: '400'
  },
  userIcon: {
    width: 168,
    height: 236,
    marginTop: 13
  },
  progressParent: {
    width: '100%',
    height: 17,
    backgroundColor: '#553241',
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#553241',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressValue: {
    width: '50%',
    height: '100%',
    backgroundColor: '#48BF85',
    borderRadius: 5,
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  progressPercent: {
    color: '#FFFFFF',
    fontWeight: "400",
    fontSize: 12,
  }

})