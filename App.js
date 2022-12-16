import React, { useEffect, useState } from 'react';
import { StatusBar, Text, useColorScheme } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import NavigationMenuComponent from './Components/TabNavigation/NavigationMenu';
import ReaderScreen from './Components/ReaderFolder/ReaderScreen';
import { Appearance } from 'react-native';
import Context from './Components/AuthContext';



const Stack = createStackNavigator();





export default function App() {


  const [keyboardOpen, setKeyboardOpen] = useState(false)


  let value = {
    keyboardOpen, setKeyboardOpen
  }


  return (
    <RecoilRoot>
      <NavigationContainer>
        <Context.Provider value={value}>
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


            <Stack.Screen
              name="ReaderScreen"
              component={ReaderScreen}
              options={{
                headerShown: false,
              }}
            />

          </Stack.Navigator>
        </Context.Provider>
      </NavigationContainer>
    </RecoilRoot>
  );
}