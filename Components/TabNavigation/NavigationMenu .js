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
import SearchedBooks from '../AllBooks/SearchedBooks';
import FeedBack from '../Auth/FeedBack';
import AboutTheApplication from '../Auth/AboutTheApplication';
import Login from '../Auth/SignIn/Login';
import ForgetPassword from '../Auth/SignIn/ForgetPassword';
import ForgetPasswordCode from '../Auth/SignIn/ForgetPasswordCode';
import NewPassword from '../Auth/SignIn/NewPassword';
import AccountUser from '../Auth/SignIn/AccountUser';
import Registration from '../Auth/SignUp/Registration';
import ConfirmRegister from '../Auth/SignUp/ConfirmRegister';
import SuccessfulRegister from '../Auth/SignUp/SuccessfulRegister';
import AllBook from '../AllBooks/AllBook';
import PisatelSinglPage from '../AllBooks/PisatelSinglPage';
import BookPage from '../AllBooks/BookPage';
import Biblografia from '../AllBooks/Bibliografia';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function NavigationMenuComponent() {
  return (
    <Tab.Navigator
      initialRouteName='StartAndBookFunk'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: '20%',
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 0,
          backgroundColor: '#EDEAE4',
          borderTopWidth: 0,
          height: 70,
          width: '60%',
          borderRadius: 50,
        },
      }}>
      <Tab.Screen
        name="AllBooksFunc"
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
        name="StartAndBookFunk"
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
      <Stack.Screen
        name="FeedBack"
        component={FeedBack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AboutTheApplication"
        component={AboutTheApplication}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPasswordCode"
        component={ForgetPasswordCode}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountUser"
        component={AccountUser}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmRegister"
        component={ConfirmRegister}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SuccessfulRegister"
        component={SuccessfulRegister}
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


export const AllBooksFunc = () => {
  return (
    <Stack.Navigator
      initialRouteName="AllBook"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="SearchedBooks"
        component={SearchedBooks}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllBook"
        component={AllBook}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PisatelSinglPage"
        component={PisatelSinglPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookPage"
        component={BookPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Biblografia"
        component={Biblografia}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};


