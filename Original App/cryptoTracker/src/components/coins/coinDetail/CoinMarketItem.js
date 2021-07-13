import React from "react";
import {View, Text, StyleSheet} from "react-native";

import Colors from "../../../resources/colors";
import GeneralStyles from "../../../resources/generalStyles";

const CoinDetailScreen = ({market}) =>{
  return(
    <View style={styles.container}>
      <Text style={[styles.marketName, GeneralStyles.whiteText]}>
        {market.name}
      </Text>
      <Text style={GeneralStyles.priceText}>
        {market.price_usd}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 16, 
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  marketName:{
    fontWeight: "bold",
  },
});

export default CoinDetailScreen;