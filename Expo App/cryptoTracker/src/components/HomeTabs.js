import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Coins from "./coins/CoinsScreen";
import Favorites from "./favorites/FavoritesScreen";
import Profile from "./users/ProfileScreen";
import Colors from "../resources/colors";

import coinsIcon from "../assets/bank.png";
import favoritesIcon from "../assets/star.png";
import userIcon from "../assets/user.png";

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
        name= "Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={userIcon}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};


export default App;
