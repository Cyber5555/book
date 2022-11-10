import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";


export default function StartAndBookComponents() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.readerBook}>
            <LinearGradient style={styles.blueViewTitle} colors={['#A82CD0', '#D64163']}>

            </LinearGradient>
            <View style={styles.viewTitleBig}>
              <Text style={styles.titleName}>Сказка об Иване-дураке и его двух братьях: Семёне-воине и Тарасе-брюхане, и немой сестре Маланье, и о старом дьяволе и трёх чертенятах</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
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
    borderWidth: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: 15

  },
  blueViewTitle: {
    width: 94,
    height: '100%',
    borderRadius: 5,
  },
  viewTitleBig: {
    height: 80,
    width: '100%'
  },
  titleName: {
    borderWidth: 1,
    width: '72%',
    height: '100%',
    paddingHorizontal: 5,
    flexWrap: "wrap"
  }
})