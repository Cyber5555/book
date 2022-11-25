import React from 'react';
import { StatusBar, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import NavigationMenuComponent, { AllBooksFunc } from './Components/TabNavigation/NavigationMenu ';
import AllBook from './Components/AllBooks/AllBook';
import BookPage from './Components/AllBooks/BookPage';



const Stack = createStackNavigator();





export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          backgroundColor={'#FAFAF0'}
          barStyle="dark-content"
        />
        <Stack.Navigator
          // initialRouteName="StartAndBook"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false
          })}>


          <Stack.Screen
            name="NavigationMenu"
            component={NavigationMenuComponent}
            options={{ headerShown: false }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}