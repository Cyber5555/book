
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import GoBack from '../../assets/NavIcons/GoBack'
import SearchIcon from '../../assets/NavIcons/SearchIcon'

export default function Pisatel() {
  return (
    <View style={styles.readerBook}>

      <Image
        style={styles.image}
        source={require('../../assets/image/image1.png')}
      />

      <View style={styles.viewTitleBig}>

        <Text style={styles.titleName}>
          Толстой{'\n'}
          Лев{'\n'}
          Николаевич
        </Text>


        <Text style={styles.date}>1828.09.09 - 1910.11.20</Text>

        <View style={styles.progressBar}>
          <View style={styles.progressValue}></View>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  readerBook: {
    height: 131,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginTop: 15,
  },
  image: {
    width: '28%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#553241'
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
    fontSize: 15,
    fontWeight: "700",
    paddingLeft: 5,
    color: '#553241',
    paddingRight: 5,
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
  date: {
    paddingLeft: 5,
    fontWeight: '400',
    fontSize: 15,
    marginTop: 17
  }

})