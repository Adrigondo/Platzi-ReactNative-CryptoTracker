/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";

const App = ()  => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};


export default App;
