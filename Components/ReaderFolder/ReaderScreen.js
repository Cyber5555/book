import React from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions, View } from "react-native";
// import ReadabilityView from "react-native-reader";


export default function ReaderScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <ReadabilityView /> */}
        

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
  }
})