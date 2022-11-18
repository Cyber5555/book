import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList } from "react-native";
import GoBack from '../../assets/NavIcons/GoBack'
import SearchIcon from '../../assets/NavIcons/SearchIcon'
import Pisatel from "../BookAndPisatel/Pisatel";
import Books from "../BookAndPisatel/Books";

export default function SearchedBooks({ navigation }) {
  const data = [
    {
      name: 'sas'
    },
    {
      name: 'sas'
    },
    {
      name: 'sas'
    },
    {
      name: 'sas'
    },
    {
      name: 'sas'
    },
    {
      name: 'sas'
    },
    {
      name: 'sas'
    },


  ]

  const [active, setActive] = useState(false)

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.backAndSearch}>
          <TouchableOpacity
            style={styles.GoBack}
            onPress={() => {
              navigation.navigate('AllBook')
            }}>
            <GoBack />
          </TouchableOpacity>

          <TextInput
            style={styles.searchInput}
            keyboardType={'web-search'}
            placeholder="поиск..."
            returnKeyType="search"
          />

          <TouchableOpacity style={styles.searchIcon}>
            <SearchIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.searchNameAuthorCountParent}>
          <TouchableOpacity
            style={[styles.searchNameAuthorCount,
            active === false ?
              { backgroundColor: '#FFFFFF' }
              : { backgroundColor: '#EDEAE4' }]}
            onPress={() => {
              setActive(false)
            }}>
            <Text
              style={[styles.searchName,
              active === false ? { color: '#553241' } : { color: '#A69496' }]
              }>
              книга
            </Text>
            <Text style={[styles.count,
            active === false ? { color: '#553241' } : { color: '#A69496' }]
            }>
              946
            </Text>
          </TouchableOpacity>

          <View style={{ width: 20 }}></View>

          <TouchableOpacity style={[styles.searchNameAuthorCount,
          active === true ?
            { backgroundColor: '#FFFFFF' }
            : { backgroundColor: '#EDEAE4' }]}
            onPress={() => {
              setActive(true)
            }}>
            <Text style={[styles.searchName,
            active === true ? { color: '#553241' } : { color: '#A69496' }]
            }>автор</Text>
            <Text
              style={[styles.count,
              active === true ? { color: '#553241' } : { color: '#A69496' }]
              }>
              47
            </Text>
          </TouchableOpacity>
        </View>

        {
          active === false ?
            <FlatList
              data={data}
              renderItem={Books}
              showsVerticalScrollIndicator={false}
            />
            :
            <FlatList
              data={data}
              renderItem={Pisatel}
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
    paddingLeft: 14,
    backgroundColor: '#EDEAE4',
    fontSize: 15
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  searchNameAuthorCount: {
    width: 120,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A69496',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  }
})