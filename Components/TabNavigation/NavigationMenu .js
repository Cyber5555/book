import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreenComponent from '../Auth/AuthScreen';
import {
  BookIcon,
  ProfileIcon,
  AllBooksIcon
} from '../../assets/NavIcons/NavIcons';
import StartAndBookComponents from '../StartAndBook/StartAndBooks';
import AllBooksComponent from '../AllBooks/AllBook';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function NavigationMenuComponent() {
  return (
    <Tab.Navigator
      initialRouteName='StartAndBook'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: '15%',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0,
          backgroundColor: '#EDEAE4',
          borderTopWidth: 0,
          height: 70.,
          width: '70%',
          borderRadius: 50,
        },
      }}>
      <Tab.Screen
        name="AllBooks"
        component={AllBooksFunc}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AllBooksIcon focused={focused} />
            );
          },
        }}
      />
      <Tab.Screen
        name="StartAndBook"
        component={StartAndBookFunk}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BookIcon focused={focused} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Auth"
        component={ProfileScreens}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <ProfileIcon focused={focused} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const ProfileScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName='AuthScreen'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreenComponent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const StartAndBookFunk = () => {
  return (
    <Stack.Navigator
      initialRouteName='StartAndBook'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="StartAndBook"
        component={StartAndBookComponents}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};


const AllBooksFunc = () => {
  return (
    <Stack.Navigator
      initialRouteName="AllBook"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="AllBook"
        component={AllBooksComponent}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};
