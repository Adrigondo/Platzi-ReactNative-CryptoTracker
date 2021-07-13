import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CoinsStack from "./coins/CoinsStack";
import FavoritesStack from "./favorites/FavoritesStack";
import Colors from "../resources/colors";

import coinsIcon from "../assets/bank.png";
import favoritesIcon from "../assets/star.png";

const Tabs = createBottomTabNavigator();

const App = ()  => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        tintColor: Colors.gray,
        // activeTintColor: Colors.gray,
        style:{
          backgroundColor: Colors.primaryColor,
        }
      }}
    >
      <Tabs.Screen
        name= "Coins"
        component={CoinsStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={coinsIcon}
            />
          )
        }}
      />
      <Tabs.Screen
        name= "Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={favoritesIcon}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};


export default App;
