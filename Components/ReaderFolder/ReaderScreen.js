import React, { useEffect, useState } from "react";
import {
  useWindowDimensions,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  Text,
} from "react-native";

import {
  ReaderProvider,
  useReader,
  Reader,
  FontSize
} from '@epubjs-react-native/core';

import {
  getCurrentLocation,
  useFileSystem,
} from '@epubjs-react-native/file-system';

import { Slider } from '@miblanchard/react-native-slider';
import MenuIcon from "../../assets/ReaderIcons/Menu";
import LightIcon from "../../assets/ReaderIcons/Light";
import GoMenuIcon from "../../assets/ReaderIcons/GoMenu";
import FontSizeIcon from "../../assets/ReaderIcons/FontSize";
import SearchIcon from "../../assets/ReaderIcons/Search";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DeviceBrightness from '@adrianso/react-native-device-brightness';



export default function ReaderScreen({ navigation }) {
  const { goToLocation, getCurrentLocation, } = useReader();
  const { width, height } = useWindowDimensions();
  const [barOpen, setBarOpen] = useState(false)
  const [range, setRange] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [boolean, setBoolean] = useState(null)

  let openValue = 138
  let closeValue = 40





  let count = [
    <MenuIcon />,
    <LightIcon />,
    <GoMenuIcon />,
    <FontSizeIcon />,
    <SearchIcon />
  ]

  const [keyboardOpen, setKeyboardOpen] = useState(false)
  let [brightness, setBrightness] = useState(0.2);




  useEffect(() => {
    DeviceBrightness.setBrightnessLevel(brightness);

    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true)
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardOpen(false)
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };

  }, [])

  const getBooleanMenu = async (index) => {
    await setBoolean(index)
    if (index === boolean) {
      await setBoolean(null)
    }
  }



  console.log(currentLocation);
  return (
    <KeyboardAwareScrollView scrollEnabled={false} style={styles.safeArea}>
      <View style={styles.container}>
        <ReaderProvider>
          <Reader
            src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
            width={width}
            height={barOpen ? height - openValue : height - closeValue}
            fileSystem={useFileSystem}
            // onLocationsReady={(e) => {
            //   console.log(e)

            // }}
            onLocationChange={(evn) => {
              console.log(evn);
            }}
            initialLocation={823}
            // initialLocations={5}
            enableSelection={true}
            onPress={() => {
              setBarOpen(!barOpen)
              setBoolean(null)
            }}
            onSwipeLeft={() => { }}
          />


        </ReaderProvider>
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
                thumbStyle={styles.thumbStyle}
                trackStyle={{ height: 4 }}
                minimumTrackTintColor={'#48BF85'}
                maximumTrackTintColor={'#553241'}
                maximumValue={1}
                minimumValue={0}
                step={0.1}
                value={brightness}
                onValueChange={async (bright) => {
                  await setBrightness(bright);
                  await DeviceBrightness.setBrightnessLevel(Number(brightness));
                }}
              />
            </View>
          }
          {
            boolean === 3 &&
            <View style={styles.fontSizeParent}>

              <TouchableOpacity style={[styles.fontSizeButton, { borderRightWidth: .5 }]}>
                <Text style={styles.fontSize}>А</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.fontSizeButton, { borderLeftWidth: .5 }]}>
                <Text style={styles.fontSize}>а</Text>
              </TouchableOpacity>

            </View>
          }
          {
            boolean === 4 &&
            <View style={styles.searchBox}>
              <TextInput
                style={styles.searchInput}
                placeholder="поиск"
                placeholderTextColor={'#553241'}
                autoFocus={true}
              />

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
                      }
                      else {
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
      </View >
    </KeyboardAwareScrollView>
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
  fontSizeButton: {
    width: '50%',
    height: '100%',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    position: 'absolute',
    top: -40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    color: '#553241',
    textAlign: 'center',
  }
})