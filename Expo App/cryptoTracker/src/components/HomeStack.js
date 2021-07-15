import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StackHeader from "./util/StackHeader"
import HomeTabs from "./HomeTabs"
import CoinDetail from "./coins/coinDetail/CoinDetailScreen";
import Profile from "./users/ProfileScreen";
import Colors from "../resources/colors";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      style={{ backgroundColor: Colors.primaryColor }}
      headerMode="screen"
      screenOptions={{
        header: ({ scene, navigation }) => (
          <StackHeader scene={scene} navigation={navigation} />
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
    </Stack.Navigator>
  );
};

export default HomeStack;
