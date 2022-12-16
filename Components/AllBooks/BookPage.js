import React from "react"
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Image, } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Counter from "../../assets/NavIcons/Counter"
import GoBack from "../../assets/NavIcons/GoBack"
import NavReaderIcon from "../../assets/NavIcons/NavReaderIcon"


export default function BookPage({ navigation }) {
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

          <Text style={styles.title}>Кавказский пленник</Text>
        </View>

        <Text style={styles.pisatelName}>Толстой Лев Николаевич</Text>

        <View style={styles.navReaderParent}>

          <LinearGradient style={styles.bookIcon} colors={['#A82CD0', '#D64163']}>

            <Text style={styles.blueViewPisatel}>
              Толстой {'\n'}
              Лев Николаевич
            </Text>

            <View style={styles.line}></View>

            <Text style={styles.blueViewTitle} numberOfLines={7}>
              Кавказский пленник
            </Text>

          </LinearGradient>

          <TouchableOpacity
            style={styles.NavReaderIcon}
            onPress={() => {
              navigation.navigate('ReaderScreen')
            }}>
            <NavReaderIcon />
          </TouchableOpacity>

        </View>


        <View style={styles.progressParent}>
          <View style={styles.progressValue}></View>
          <Text style={styles.progressPercent}>37%</Text>
        </View>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {

          }}>
          <Text style={styles.buttonsText}>Информация</Text>
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
    paddingTop: 3,
    color: "#553241"
  },
  //  standarts

  pisatelName: {
    color: '#553241',
    marginTop: 10
  },
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
  bookIcon: {
    width: 168,
    height: 236,
    marginTop: 13,
    borderRadius: 14
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
    width: '40%',
    height: '100%',
    backgroundColor: '#48BF85',
    borderRadius: 5,
    position: 'absolute',
    left: 0
  },
  progressPercent: {
    color: '#FFFFFF',
    fontWeight: "400",
    fontSize: 12,
  },
  blueViewPisatel: {
    textAlign: 'center',
    fontSize: 14,
    color: '#ffffff',
    marginTop: 20
  },
  line: {
    backgroundColor: '#fff',
    width: '80%',
    height: 1,
    alignSelf: 'center',
    marginTop: 7
  },
  blueViewTitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 7,
    fontWeight: '600',
    paddingHorizontal: 4
  },
  navReaderParent: {
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  NavReaderIcon: {
    width: 105,
    height: 79,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})