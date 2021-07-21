import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Coins from "./coins/CoinsScreen";
import Favorites from "./favorites/FavoritesScreen";
import Travel from "./travels/TravelScreen";
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
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen
        name= "Coins"
        component={Coins}
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
        component={Favorites}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={favoritesIcon}
            />
          )
        }}
      />
      <Tabs.Screen
        name= "Travel"
        component={Travel}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="map"
              color= {color}
              size= {size}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};


export default App;
