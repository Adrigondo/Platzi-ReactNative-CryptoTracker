import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";

import Http from "../../libs/http";

import CoinsItem from "./CoinsItem";
import CoinsSearch from "./CoinsSearch";
import Colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

class CoinsScreen extends React.Component {
  state={
    coins: [],
    coinsFiltered: [],
    loading: false,
    error: undefined,
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', this.getCoins);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getCoins);
  }

  getCoins = async () => {
    this.setState({
      loading: true,
      error: undefined,
    });
    try{
      const response = await Http.instance.get("https://api.coinlore.net/api/tickers/");
      this.setState({
        loading: false,
        coins: response.data,
        coinsFiltered: response.data,
      });

    }catch(error){
      this.setState({
        loading: false,
        error: error
      });
    }
    // console.log("Coins:", this.filteredCoins);
  }

  handlePress = (coin) => {
    // console.log("Go to detail", coin);
    this.props.navigation.navigate("CoinDetail",{coin});
  }

  handleSearch = (query) => {
    const {coins} = this.state;

    const coinsFiltered = coins.filter(
      (coin)=> {
        let coinNameClean=coin.name.toLowerCase();
        let coinSymbolClean=coin.symbol.toLowerCase();
        let queryClean=query.toLowerCase();
        return(
          coinNameClean.includes(queryClean) ||
          coinSymbolClean.includes(queryClean)
        );
      }
    );
    this.setState({coinsFiltered:coinsFiltered});
  }

  render() {

    const { coinsFiltered, loading }=this.state;

    return (
      <View style={styles.container}>
        { loading 
          ? <ActivityIndicator
              color="#fff"
              size="large"
              style={GeneralStyles.loader}
            />
          : <>
            <View>
              <CoinsSearch onChange={this.handleSearch}/>
            </View>
            <FlatList
              data={coinsFiltered}
              keyExtractor={(item) => item}
              renderItem={ ({item}) =>
                <CoinsItem
                  item={item}
                  onPress={()=>this.handlePress(item)}
                />
              }
            />
            </>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    // alignItems: "center",
  },
  // btn: {
  //   padding: 8,
  //   backgroundColor: "blue",
  //   borderRadius: 8,
  //   width: "90%",
  //   margin: 16,
  // },
  // btnText: {
  //   color: "#fff",
  //   textAlign: "center"
  // },
});

export default CoinsScreen;