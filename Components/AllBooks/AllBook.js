import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList } from "react-native";
import GoBack from '../../assets/NavIcons/GoBack'
import SearchIcon from '../../assets/NavIcons/SearchIcon'
import Pisatel from "../BookAndPisatel/Pisatel";
import Books from "../BookAndPisatel/Books";
import Svg, { Path } from "react-native-svg";

export default function AllBook({ navigation }) {
  const data = [
    {
      id: 1,
      name: 'A',
      count: 564
    },
    {
      id: 2,
      name: 'B',
      count: 564
    },
    {
      id: 3,
      name: 'C',
      count: 564
    },
    {
      id: 4,
      name: 'D',
      count: 564
    },
    {
      id: 5,
      name: 'E',
      count: 564
    },
    {
      id: 6,
      name: 'F',
      count: 564
    },
    {
      id: 7,
      name: 'G',
      count: 564
    },
    {
      id: 8,
      name: 'H',
      count: 564
    },
    {
      id: 9,
      name: 'I',
      count: 564
    },
    {
      id: 10,
      name: 'J',
      count: 564
    },
    {
      id: 11,
      name: 'K',
      count: 564
    },
    {
      id: 12,
      name: 'L',
      count: 564
    },
    {
      id: 13,
      name: 'M',
      count: 564
    },
    {
      id: 14,
      name: 'N',
      count: 564
    },
    {
      id: 15,
      name: 'O',
      count: 564
    },
    {
      id: 16,
      name: 'P',
      count: 564
    },
    {
      id: 17,
      name: 'Q',
      count: 564
    },
    {
      id: 18,
      name: 'R',
      count: 564
    },
    {
      id: 19,
      name: 'S',
      count: 564
    },
    {
      id: 20,
      name: 'T',
      count: 564
    },
    {
      id: 21,
      name: 'U',
      count: 564
    },
    {
      id: 22,
      name: 'V',
      count: 564
    },
    {
      id: 23,
      name: 'W',
      count: 564
    },
    {
      id: 24,
      name: 'X',
      count: 564
    },
    {
      id: 25,
      name: 'Y',
      count: 564
    },
    {
      id: 26,
      name: 'Z',
      count: 564
    },
  ]

  const data1 = [
    {
      id: 1,
      name: 'A1',
      count: 564
    },
    {
      id: 2,
      name: 'B1',
      count: 564
    },
    {
      id: 3,
      name: 'C1',
      count: 564
    },
    {
      id: 4,
      name: 'D1',
      count: 564
    },
    {
      id: 5,
      name: 'E1',
      count: 564
    },
    {
      id: 6,
      name: 'F1',
      count: 564
    },
    {
      id: 7,
      name: 'G1',
      count: 564
    },
    {
      id: 8,
      name: 'H1',
      count: 564
    },
    {
      id: 9,
      name: 'I1',
      count: 564
    },
    {
      id: 10,
      name: 'J1',
      count: 564
    },
    {
      id: 11,
      name: 'K1',
      count: 564
    },
    {
      id: 12,
      name: 'L1',
      count: 564
    },
    {
      id: 13,
      name: 'M1',
      count: 564
    },
    {
      id: 14,
      name: 'N1',
      count: 564
    },
    {
      id: 15,
      name: 'O1',
      count: 564
    },
    {
      id: 16,
      name: 'P1',
      count: 564
    },
    {
      id: 17,
      name: 'Q1',
      count: 564
    },
    {
      id: 18,
      name: 'R1',
      count: 564
    },
    {
      id: 19,
      name: 'S1',
      count: 564
    },
    {
      id: 20,
      name: 'T1',
      count: 564
    },
    {
      id: 21,
      name: 'U1',
      count: 564
    },
    {
      id: 22,
      name: 'V1',
      count: 564
    },
    {
      id: 23,
      name: 'W1',
      count: 564
    },
    {
      id: 24,
      name: 'X1',
      count: 564
    },
    {
      id: 25,
      name: 'Y1',
      count: 564
    },
    {
      id: 26,
      name: 'Z1',
      count: 564
    },
  ]

  const [active, setActive] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [searchActiveButton, setSearchActiveButton] = useState(null)

  // const RenderItem = ({ item }) => {
  //   return (

  //   )
  // }


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.backAndSearch}>
          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('StartAndBook')
            }}>
            <GoBack />
          </TouchableOpacity>

          <TextInput
            style={styles.searchInput}
            keyboardType={'web-search'}
            placeholder="поиск..."
            returnKeyType="search"
          />

          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => {
              navigation.navigate('SearchedBooks')
            }}>
            <SearchIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.searchNameAuthorCountParent}>

          <TouchableOpacity
            style={[styles.searchNameAuthorCount, active === false ? { backgroundColor: '#FFFFFF', borderBottomWidth: 0 } : { backgroundColor: '#EDEAE4', borderBottomWidth: 1 }]}
            onPress={() => {
              setActive(false)
            }}>

            <Text style={[styles.searchName, active === false ? { color: '#553241' } : { color: '#A69496' }]}>автор</Text>

          </TouchableOpacity>

          <View style={{ width: '4%', borderBottomWidth: 1, borderColor: '#A69496', height: 44 }}></View>

          <TouchableOpacity
            style={[styles.searchNameAuthorCount, active === true ? { backgroundColor: '#FFFFFF', borderBottomWidth: 0 } : { backgroundColor: '#EDEAE4', borderBottomWidth: 1 }]}
            onPress={() => {
              setActive(true)
            }}>

            <Text style={[styles.searchName, active === true ? { color: '#553241' } : { color: '#A69496' }]}>год</Text>

          </TouchableOpacity>




          <View style={[styles.letterSearch, searchActive === true ? { height: 212 } : { height: 83 }]}>
            {/* uxahayac */}
            {
              searchActive === true &&
              <ScrollView style={{ height: '93%', }} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', height: '100%', position: 'relative', }}>
                  {
                    data.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={[styles.letterParent, { margin: '1.8%', width: '13%', }, searchActiveButton == item.id ? { backgroundColor: 'white' } : { backgroundColor: '#EDEAE4' }]}
                          onPress={() => {
                            if (item.id == searchActiveButton) {
                              setSearchActiveButton(null)
                            }
                            else {
                              setSearchActiveButton(item.id)
                            }
                          }}>
                          <Text style={[styles.letter, searchActiveButton == item.id ? { color: '#553241' } : { color: '#A69496' }]}>
                            {item.name}
                          </Text>
                          <Text style={[styles.count, searchActiveButton == item.id ? { color: '#553241' } : { color: '#A69496' }]}>
                            {item.count}
                          </Text>
                        </TouchableOpacity>
                      )


                    })

                  }
                </View>
              </ScrollView>
            }
            {/* horizonakan */}
            {searchActive === false &&
              <ScrollView style={{ height: '93%' }} showsHorizontalScrollIndicator={false} horizontal>
                <View style={{ flexDirection: 'row', height: '100%', position: 'relative', }}>
                  {
                    data.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={[{ marginVertical: 6,marginHorizontal: 5.9, width: 41, }, styles.letterParent, searchActiveButton == item.id ? { backgroundColor: 'white' } : { backgroundColor: '#EDEAE4' }]}
                          onPress={() => {
                            if (item.id == searchActiveButton) {
                              setSearchActiveButton(null)
                            }
                            else {
                              setSearchActiveButton(item.id)
                            }
                          }}>
                          <Text style={[styles.letter, searchActiveButton == item.id ? { color: '#553241' } : { color: '#A69496' }]}>
                            {item.name}
                          </Text>
                          <Text style={[styles.count, searchActiveButton == item.id ? { color: '#553241' } : { color: '#A69496' }]}>
                            {item.count}
                          </Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              </ScrollView>
            }


            <TouchableOpacity
              style={styles.openLetterSearch}
              onPress={() => {
                setSearchActive(!searchActive)
              }}>
              {searchActive === true ?
                <Svg
                  width={15}
                  height={4}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <Path
                    d="M0 3.336c0-.085.035-.17.103-.247a.832.832 0 0 1 .293-.198L6.824.13a1.73 1.73 0 0 1 .68-.13c.249 0 .49.046.681.13l6.428 2.858c.219.097.356.236.383.387.026.151-.062.302-.244.419-.182.116-.443.19-.726.204a1.774 1.774 0 0 1-.784-.13L7.499 1.313l-5.742 2.47c-.157.069-.349.113-.552.127a1.926 1.926 0 0 1-.594-.05 1.118 1.118 0 0 1-.449-.215c-.108-.092-.164-.2-.162-.309Z"
                    fill="#fff"
                  />
                </Svg>
                :
                <Svg
                  width={15}
                  height={4}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M15 .664c0 .085-.035.17-.103.247a.832.832 0 0 1-.293.198L8.175 3.87a1.73 1.73 0 0 1-.68.13 1.73 1.73 0 0 1-.681-.13L.387 1.012C.168.915.031.776.005.625-.022.474.065.323.248.206.43.09.69.016.974.002c.283-.014.566.033.784.13l5.743 2.555 5.742-2.47c.157-.069.349-.113.552-.127.203-.014.409.004.594.05.185.048.34.122.449.215.108.092.164.2.162.309Z"
                    fill="#fff"
                  />
                </Svg>
              }


            </TouchableOpacity>

          </View>

        </View>

        {
          active === true ?
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={() => {
                return (
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('BookPageFunc')
                  }}>
                    <Books />
                  </TouchableOpacity>
                )
              }}
              showsVerticalScrollIndicator={false}
            />
            :
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={() => {
                return (
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('PisatelSinglPage')
                  }}>
                    <Pisatel />
                  </TouchableOpacity>
                )
              }}
              showsVerticalScrollIndicator={false}
            />
        }



      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAF0',
    paddingHorizontal: 20,
    paddingBottom: 120
  },
  backAndSearch: {
    marginTop: 13,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  GoBack: {
    marginRight: 7
  },
  searchInput: {
    width: '88%',
    height: 35,
    borderWidth: 1,
    borderColor: '#AF9EA0',
    borderRadius: 8,
    padding: 0,
    paddingLeft: 14,
    backgroundColor: '#EDEAE4',
    fontSize: 15,
  },
  searchIcon: {
    position: 'absolute',
    right: 3,
    top: 3
  },
  // standart search

  searchNameAuthorCountParent: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    flexWrap: 'wrap'
  },
  searchNameAuthorCount: {
    width: '48%',
    height: 44,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#A69496',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  },
  letterSearch: {
    borderWidth: 1,
    borderTopWidth: 0,
    width: '100%',
    borderColor: '#A69496',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row'
  },
  letterParent: {
    height: 53,
    borderWidth: 1,
    borderRadius: 8,
    // marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openLetterSearch: {
    width: '100%',
    height: 11,
    backgroundColor: '#553241',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    fontWeight: "700",
    fontSize: 16,
    color: '#A69496'
  },
  count: {
    fontSize: 14,
    fontWeight: "400",
    color: '#A69496'
  }
})