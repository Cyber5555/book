import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, Easing, SafeAreaView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { Reader, ReaderProvider, useReader, FontSize } from '@epubjs-react-native/core';
import { useFileSystem, getCurrentLocation } from '@epubjs-react-native/file-system';
import { Slider } from '@miblanchard/react-native-slider';
import MenuIcon from "../../assets/ReaderIcons/Menu";
import LightIcon from "../../assets/ReaderIcons/Light";
import GoMenuIcon from "../../assets/ReaderIcons/GoMenu";
import FontSizeIcon from "../../assets/ReaderIcons/FontSize";
import SearchIcon from "../../assets/ReaderIcons/Search";

export default function ReaderScreen({ navigation }) {
  const { changeFontSize, goToLocation, changeTheme, getCurrentLocation } = useReader();
  const { width, height } = useWindowDimensions();
  const [barOpen, setBarOpen] = useState(false)
  const [range, setRange] = useState(false)

  const [boolean, setBoolean] = useState(null)

  let openValue = 138
  let closeValue = 40


  const LoadingComponent = () => {
    return (
      <View>
        <ActivityIndicator size={150} color="blue" />
      </View>
    );
  }


  let count = [
    <MenuIcon />,
    <LightIcon />,
    <GoMenuIcon />,
    <FontSizeIcon />,
    <SearchIcon />
  ]


  const getBooleanMenu = async (index) => {
    await setBoolean(index)
    if (index === boolean) {
      await setBoolean(null)
    }

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ReaderProvider>
          <TouchableOpacity style={styles.customStyleButton} onPress={() => {
            setBarOpen(!barOpen)
            setBoolean(null)
          }}></TouchableOpacity>
          <Reader
            src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
            width={width}
            height={barOpen ? height - openValue : height - closeValue}
            fileSystem={useFileSystem}
            onLocationChange={() => { getCurrentLocation }}
            initialLocation={1}
            renderLoadingFileComponent={LoadingComponent}
            enableSelection={true}
          // FontSize={console.log(changeFontSize)}
          />


          <View style={[styles.bottomBar, barOpen ? { height: openValue } : { height: closeValue }]}>

            {
              boolean === 0 &&
              <View style={styles.infoMenu}>
                <Text style={styles.glavaText}>Глава 1.Почледний звонок</Text>
                <View style={styles.horizontalLine}></View>
                <Text style={styles.glavaText}>Примечания</Text>
              </View>
            }
            {
              boolean === 1 &&
              <View style={styles.lightMenu}>
                <Slider
                  value={range}
                  thumbStyle={styles.thumbStyle}
                  trackStyle={{ height: 4 }}
                  minimumTrackTintColor={'#48BF85'}
                  maximumTrackTintColor={'#553241'}
                  onValueChange={value => setRange(range)}
                />
              </View>
            }
            {
              boolean === 3 &&
              <View style={styles.fontSizeParent}>
                <Text style={styles.fontSize}>А</Text>
                <View style={styles.verticalLine}></View>
                <Text style={styles.fontSize}>а</Text>

              </View>
            }
            {
              barOpen &&
              <View style={styles.buttonsParent}>
                {
                  count.map((item, index) => (
                    <TouchableOpacity
                      style={[styles.buttons, boolean === index ? { backgroundColor: '#FFFFFF' } : { backgroundColor: '#EDEAE4' }]}
                      key={index}
                      onPress={() => {
                        if (index === 2) {
                          navigation.navigate('StartAndBook')
                        } else {
                          getBooleanMenu(index)
                        }
                      }}>
                      {item}
                    </TouchableOpacity>
                  ))
                }
              </View>
            }
            {
              barOpen &&
              <Slider
                value={range}
                containerStyle={{ width: '95%', alignSelf: 'center' }}
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
      </View >
    </SafeAreaView >
  )
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  team: {
    color: 'white',
  },
  bottomBar: {
    width: '100%',
    backgroundColor: '#EDEAE4',
    borderWidth: 1,
    borderColor: '#553241',
    justifyContent: 'flex-end',
    paddingTop: 8,
    width: '100%',
    height: '100%',
    // paddingHorizontal: 10,
    position: 'relative',
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
    // paddingHorizontal: 50
    backgroundColor: 'rgba(255, 255, 255)',

  },
  infoBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,

  },
  buttons: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#55324133',
    borderRadius: 10
  },
  infoMenu: {
    width: '87%',
    height: 102,
    backgroundColor: 'white',
    position: 'absolute',
    top: -102,
    left: -1,
    borderTopRightRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 5
  },
  glavaText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 5,
    paddingVertical: 17,
  },
  horizontalLine: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
  },
  lightMenu: {
    width: '100%',
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: -40,
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10
  },
  fontSizeParent: {
    width: 155,
    height: 55,
    position: 'absolute',
    top: -55,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  fontSize: {
    fontWeight: '400',
    fontSize: 40,
    color: '#553241',
  },
  verticalLine: {
    height: '100%',
    borderRightWidth: 1,
    borderStyle: 'dashed',
  }
})