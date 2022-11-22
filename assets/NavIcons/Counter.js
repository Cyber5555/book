import React from "react";
import { StyleSheet, Text, View, } from "react-native";


export default function Counter({ counterText }) {
  return (
    <View style={styles.counterParent}>
      <View style={styles.corner}></View>
      <Text style={styles.counterText}>{counterText}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  counterParent: {
    backgroundColor: '#DE5865',
    height: 22,
    position: 'relative',
    paddingHorizontal: 10,
  },
  corner: {
    position: 'absolute',
    left: -10,
    top: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 11,
    borderRightWidth: 10,
    borderBottomWidth: 11,
    borderLeftWidth: 0,

    borderTopColor: 'transparent',
    borderRightColor: '#DE5865',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  }
})

