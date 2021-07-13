import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import Colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

const FavoritesEmptyState = () => {
  return(
    <View style={styles.container}>
      <Text style={[GeneralStyles.center,GeneralStyles.h3]}>
        You don't have any favorite yet!
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesEmptyState;