import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";


export default function AllBooksComponent() {
  return (
    <SafeAreaView style={StyleSheet.safeArea}>
      <View style={styles.container}>

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
    backgroundColor: '#ff0'
  }
})