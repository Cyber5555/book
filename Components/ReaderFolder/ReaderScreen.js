import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Reader, ReaderProvider, useReader } from '@epubjs-react-native/core';
import { useFileSystem, getCurrentLocation } from '@epubjs-react-native/file-system';



export default function ReaderScreen() {
  const { width, height } = useWindowDimensions();
  const { goNext } = useReader(50);



  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ReaderProvider>
          <Reader
            src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
            width={width}
            height={height}
            fileSystem={useFileSystem}
            enableSelection={true}
            defaultTheme={{ "body": { "backgroundColor": "black" } }}
            onLocationChange={(number, numbe, numb) => {
              return (
               <Text>number = 50, numbe = 100, numb = 150</Text>
              )
            }}
          />
        </ReaderProvider>
        <Text>{getCurrentLocation}</Text>
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
  },
  team: {
    color: 'white',
  }
})