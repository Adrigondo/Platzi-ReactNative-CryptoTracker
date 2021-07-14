import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from "../../resources/colors";
import Favorites from "./FavoritesScreen";
import CoinDetail from "../coins/coinDetail/CoinDetailScreen";

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: Colors.lightPrimaryColor,
      }}
    >
      <Stack.Screen 
        name="Favorites" 
        component={Favorites} 
      />
      <Stack.Screen 
        name="CoinDetail" 
        component={CoinDetail} 
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
