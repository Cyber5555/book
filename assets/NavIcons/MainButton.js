import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MainButton({ text }) {
  return (

    <View style={styles.butParent}>
      <Text style={styles.butText}>{text}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  butParent: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#AF9EA0',
    backgroundColor: '#EDEAE4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  butText: {
    fontWeight: '400',
    fontSize: 19,
    color: '#A69496'
  }
})