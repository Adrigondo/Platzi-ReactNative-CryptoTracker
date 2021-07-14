import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CoinsStack from "./coins/CoinsStack";
import FavoritesStack from "./favorites/FavoritesStack";
import UserStack from "./users/UserStack";
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
      <Tabs.Screen
        name= "User"
        component={UserStack}
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
