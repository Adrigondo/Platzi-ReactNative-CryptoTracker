import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderStack from "./header/HeaderStack"
import HomeTabs from "./HomeTabs"
import CoinDetail from "./coins/coinDetail/CoinDetailScreen";
import Profile from "./users/ProfileScreen";
import UserCreate from "./users/UserCreateScreen";
import ProfileEdit from "./users/ProfileEditScreen";
import Colors from "../resources/colors";
import UsersSearch from './users/UsersSearchScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      style={{ backgroundColor: Colors.primaryColor }}
      headerMode="screen"
      screenOptions={{
        header: ({ scene, navigation }) => (
          <HeaderStack scene={scene} navigation={navigation} />
        )
        // headerStyle: {
        //   backgroundColor: Colors.primaryColor,
        // },
        // headerTintColor: Colors.lightPrimaryColor,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeTabs}
        options={
          {headerTitle: "Crypto Tracker"}
        }
      />
      {/* <Stack.Screen 
        name="Coins" 
        component={CoinsScreen} 
      /> */}
      <Stack.Screen 
        name="CoinDetail" 
        component={CoinDetail} 
        options={
          {headerTitle: "Coin Detail"}
        }
      />
      <Stack.Screen
        name= "Profile"
        component= {Profile}
        options={
          {headerTitle: "Profile"}
        }
      />
      <Stack.Screen
        name= "UserCreate"
        component= {UserCreate}
        options={
          {headerTitle: "Sign up!"}
        }
      />
      <Stack.Screen
        name= "ProfileEdit"
        component= {ProfileEdit}
        options={
          {headerTitle: "Edit Profile"}
        }
      />
      <Stack.Screen
        name= "UsersSearch"
        component= {UsersSearch}
        options={
          {headerTitle: ""}
        }
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
