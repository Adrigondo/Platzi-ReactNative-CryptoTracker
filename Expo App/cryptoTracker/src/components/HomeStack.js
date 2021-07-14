import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabs from "./HomeTabs"
import CoinDetail from "./coins/coinDetail/CoinDetailScreen";
import Colors from "../resources/colors";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      style={{backgroundColor: Colors.primaryColor}}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: Colors.lightPrimaryColor,
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeTabs} 
      />
      {/* <Stack.Screen 
        name="Coins" 
        component={CoinsScreen} 
      /> */}
      <Stack.Screen 
        name="CoinDetail" 
        component={CoinDetail} 
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
