import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform
} from "react-native"

import Colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

const CoinsItem=({item, onPress})=>{

  const getImageArrow = () =>{
    if(item.percent_change_1h>0){
      return require("../../assets/arrow_up.png");
    }else{
      return require("../../assets/arrow_down.png");
    }
  }

  return(
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.row}>
        <Text style={[styles.symbolText, GeneralStyles.h3]}>{item.symbol}</Text>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={GeneralStyles.priceText}>${item.price_usd}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{item.percent_change_1h}</Text>
        <Image
          source={getImageArrow()}
          style={styles.imgArrow}
        />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    paddingLeft: 6,
    justifyContent: "space-between",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginLeft: Platform.OS =="android"? 10 : 10 ,
    // shadowOpacity: 100,
    // shadowRadius: 2,
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
  },
  symbolText:{
    marginRight: 10,
  },
  text:{
    color: "white",
    fontSize: 14,
    marginRight: 12,
  },
  imgArrow:{
    width: 16,
    height: 16,
  }
});
export default CoinsItem;