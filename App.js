import React from 'react';
import { StatusBar, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import NavigationMenuComponent, { AllBooksFunc } from './Components/TabNavigation/NavigationMenu ';
import ReaderScreen from './Components/ReaderFolder/ReaderScreen';




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
          initialRouteName="NavigationMenu"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false
          })}>
          <Stack.Screen
            name="NavigationMenu"
            component={NavigationMenuComponent}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="AllBooksFunc"
            component={AllBooksFunc}
            options={{ headerShown: false }}
          /> */}

          <Stack.Screen
            name="ReaderScreen"
            component={ReaderScreen}
            options={{
              headerShown: false,
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}