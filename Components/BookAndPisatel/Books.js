import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function Books() {
  return (
    <View style={styles.readerBook}>

      <LinearGradient style={styles.blueView} colors={['#A82CD0', '#D64163']}>

        <Text style={styles.blueViewPisatel}>
          Толстой {'\n'}
          Лев Николаевич
        </Text>

        <View style={styles.line}></View>

        <Text style={styles.blueViewTitle} numberOfLines={7}>
          Сказка об Иване-дураке и его
          двух братьях: Семёне-воине и
          Тарасе-брюхане, и немой сестре
          Маланье, и о старом дьяволе и
          трёх чертенятах
        </Text>
      </LinearGradient>

      <View style={styles.viewTitleBig}>

        <Text numberOfLines={4} style={styles.titleName}>
          Сказка об Иване-дураке и его двух братьях:
          Семёне-воине и Тарасе-брюхане, и немой
          сестре Маланье, и о старом дьяволе и трёх чертенятах
        </Text>

        <Text style={styles.pisatel}>
          Толстой Лев Николаевич
        </Text>

        <View style={styles.progressBar}>
          <View style={styles.progressValue}></View>
        </View>

      </View>
    </View>
  )
}




const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAF0',
    paddingHorizontal: 26,
  },
  readerBook: {
    height: 131,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: 15,
  },
  blueView: {
    width: '28%',
    height: '100%',
    borderRadius: 5,
  },
  viewTitleBig: {
    height: 121,
    width: '72%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderLeftWidth: 0,
    marginTop: 4,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    //overflow: 'hidden'
  },
  titleName: {
    width: '100%',
    flexWrap: "wrap",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 5,
    color: '#553241',
    paddingRight: 5,
  },
  pisatel: {
    fontWeight: '400',
    fontSize: 13,
    marginTop: 10,
    marginLeft: 5
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#553241',
    borderWidth: 1,
    borderColor: '#553241',
    borderBottomRightRadius: 20,
    borderLeftWidth: 0
  },
  progressValue: {
    height: '100%',
    width: 50,
    backgroundColor: '#48BF85',
    borderBottomRightRadius: 20
  },
  blueViewPisatel: {
    textAlign: 'center',
    fontSize: 9,
    color: '#ffffff',
    marginTop: 5
  },
  line: {
    backgroundColor: '#fff',
    width: '80%',
    height: 1,
    alignSelf: 'center',
    marginTop: 7
  },
  blueViewTitle: {
    fontSize: 8,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 7,
    fontWeight: '600',
    paddingHorizontal: 4
  }
})