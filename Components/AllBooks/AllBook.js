import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";


export default function AllBooksComponent() {
  return (
    <SafeAreaView style={StyleSheet.safeArea}>
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>allBooks</Text>
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
    backgroundColor: '#000'
  }
})