import React from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Books from "../BookAndPisatel/Books";
import { AllBooksFunc } from "../TabNavigation/NavigationMenu";


export default function StartAndBookComponents({ navigation, route }) {

  const itemInfos = [
    {
      name: 'Толстой Лев Николаевич'
    },
    {
      name: 'Толстой Лев Николаевич'
    },
    {
      name: 'Толстой Лев Николаевич'
    },
    {
      name: 'Толстой Лев Николаевич'
    },
    {
      name: 'Толстой Лев Николаевич'
    },
    {
      name: 'Толстой Лев Николаевич'
    },
    {
      name: 'Толстой Лев Николаевич'
    },
  ]



  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <FlatList
          data={itemInfos}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                key={item.index}
                onPress={() => {
                  navigation.navigate('BookPageFunc')
                }}>
                <Books />
              </TouchableOpacity>
            )
          }}
          showsVerticalScrollIndicator={false}
        />

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
    paddingHorizontal: 20,
    paddingBottom: 120
  },
  // standart


})