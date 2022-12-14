import React, { useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Reader, ReaderProvider, useReader, FontSize } from '@epubjs-react-native/core';
import { useFileSystem, getCurrentLocation } from '@epubjs-react-native/file-system';
import { Slider } from '@miblanchard/react-native-slider';



export default function ReaderScreen() {
  const { width, height } = useWindowDimensions();

  const { changeFontSize, goToLocation, changeTheme, getCurrentLocation } = useReader();

  const [barOpen, setBarOpen] = useState(false)
  const [range, setRange] = useState(false)

  const LoadingComponent = () => {
    return (
      <View>
        <ActivityIndicator size={150} color="blue" />
      </View>
    );


  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ReaderProvider>
          <TouchableOpacity style={styles.customStyleButton} onPress={() => setBarOpen(!barOpen)}></TouchableOpacity>
          <Reader
            src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
            width={width}
            height={height - 40}
            fileSystem={useFileSystem}
            onLocationChange={() => { getCurrentLocation }}
            initialLocation={1}
            renderLoadingFileComponent={LoadingComponent}
            enableSelection={true}
            FontSize={console.log(changeFontSize)}
          />


          <View style={[styles.bottomBar, barOpen === true ? { height: 130 } : { height: 40 }]}>
            {
              barOpen &&
              <View style={styles.buttonsParent}>

              </View>
            }
            {
              barOpen &&
              <Slider
                value={range}
                thumbStyle={styles.thumbStyle}
                trackStyle={{ height: 4 }}
                minimumTrackTintColor={'#48BF85'}
                maximumTrackTintColor={'#553241'}
                onValueChange={value => setRange(range)}
              />
            }
            <View style={styles.infoBar}>
              <View>
                <Text style={styles.leftCount}>15/430</Text>
                <Text style={styles.leftCount}>58.5%</Text>
              </View>
              <View>
                <Text style={styles.centerText}>Северное сияние</Text>
                <Text style={styles.centerText}>Глава 1.Последний звонок</Text>
              </View>
              <Text style={styles.rightTime}>20:00</Text>

            </View>
          </View>
        </ReaderProvider>
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
  },
  bottomBar: {
    width: '100%',
    backgroundColor: '#EDEAE4',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#553241',
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
  },
  leftCount: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14
  },
  rightTime: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14
  },
  centerText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  customStyleButton: {
    width: 200,
    height: 200,
    zIndex: 1,
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: [
      { translateX: -100 },
      { translateY: -100 }
    ],
    backgroundColor: 'red',
  },
  infoBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  thumbStyle: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#553241',
    backgroundColor: '#fff',
  },
  buttonsParent: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#553'
  }
})