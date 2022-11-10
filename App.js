import React from 'react';
import { StatusBar, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';
import NavigationMenu from './Components/TabNavigation/NavigationMenu ';
import NavigationMenuComponent from './Components/TabNavigation/NavigationMenu ';
import StartAndBookComponents from './Components/StartAndBook/StartAndBooks';


const Stack = createStackNavigator();





export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar
          hidden={false}
          translucent={false}
          animated={true}
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Stack.Navigator
         // initialRouteName="StartAndBook"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false
          })}>
          {/* <Stack.Screen
            name="StartAndBook"
            component={StartAndBookComponents}
            options={({ navigation }) => ({
              title: '',
              headerTransparent: true,
              // headerLeft: () => <HeaderTitle navigation={navigation} title={'По номеру телефона'} />,
            })}
          /> */}

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