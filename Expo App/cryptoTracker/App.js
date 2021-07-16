import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/components/HomeStack";

import { setCustomText } from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: "Roboto",
    color: "white",
  }
};

setCustomText(customTextProps);

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
