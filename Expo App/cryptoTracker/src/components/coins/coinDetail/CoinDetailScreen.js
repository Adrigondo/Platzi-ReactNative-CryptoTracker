import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SectionList,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";

import Http from "../../../libs/http"
import StorageApp from "../../../libs/storageApp"

import Colors from "../../../resources/colors";
import GeneralStyles from "../../../resources/generalStyles";
import favoritesIcon from "../../../assets/star.png";

import CoinMarketItem from "./CoinMarketItem";


class CoinDetailsScreen extends React.Component {
  state={
    coin: {},
    markets: undefined,
    isFavorite: false,
    loading: false,
    error: undefined,
  };

  componentDidMount(){
    this.getCoin();
    // console.log("Coin:", coin);
  }

  getCoin = () => {
    const { coin }= this.props.route.params;

    this.props.navigation.setOptions({title: coin.symbol});
    this.setState(
      {
        coin: coin,
      },
      () =>{
        this.getFavorite();
        this.getMarkets(coin);
      }
    )
  }

  getIcon = (coinId) => {
    if(coinId){
      return `https://c1.coinlore.com/img/${coinId}.png`;
    }
  }

  getSections = (coin) => {
    const sections=[
      {
        title: "Market cap",
        data: [coin.market_cap_usd],
      },
      {
        title: "Volume 24h",
        data: [coin.volume24],
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24h],
      },
    ];
    
    return sections;
  }

  getMarkets = async (coin) => {
    this.setState({
      coin: coin,
      loading: true,
      error: undefined,
    });

    const coinId=coin.id;
    const url=`https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    
    try{
      const markets = await Http.instance.get(url);
      
      this.setState({
        markets: markets,
        loading: false,
      });
    }catch(error){
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  toogleFavorite = () => {
    if(this.state.isFavorite){
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  }
  
  addFavorite = async () => {
    const coin = JSON.stringify(this.state.coin.id);
    const key = `favorite-${this.state.coin.id}`
    console.log(coin);
    const stored = await StorageApp.instance.store(key, coin);

    if(stored){
      this.setState({ isFavorite: true });
    }
  }

  removeFavorite = async () => {

    Alert.alert("Remove favorite","Are you sure?",[
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Remove",
        onPress: async () => {
          const key = `favorite-${this.state.coin.id}`
          await StorageApp.instance.remove(key);
          this.setState({ isFavorite: false });
        },
        style: "destructive",
      },
    ])
  }

  getFavorite = async () => {
    const key = `favorite-${this.state.coin.id}`
    try{
      const favoriteString = await StorageApp.instance.get(key);
      // console.log("Favorite String", favoriteString);

      if(favoriteString){
        this.setState({isFavorite: true});
      }

    }catch(error){
      console.log("Error Get Favorite", error);
    }
  }

  render() {
    const { coin, markets, loading, isFavorite } = this.state;
    // console.log(coin);
    return (
      <View style={styles.container}>
        <View style={styles.badgeContainer} >
          <View style={styles.subHeader}>
            <Pressable
              onPress={this.toogleFavorite}
            >
              <Image
                source={favoritesIcon}
                style={[
                  styles.btnFavorite,
                  isFavorite && styles.btnFavoriteActive
                ]}
              />
            </Pressable>
            <View style={styles.subHeaderCoin}>
              <Text style={styles.subHeaderTitle}>
                {coin.name}
              </Text>
              <Image 
                source={{ uri: this.getIcon(coin.nameid)}}
                style={styles.subHeaderIcon}
              />
            </View>
          </View>
          <View>
          <SectionList
            style={styles.section}
            sections={this.getSections(coin)}
            keyExtractor={(item) => item}
            renderSectionHeader={({ section }) =>
              <View style={[styles.sectionHeader, GeneralStyles.paddingContent]}>
                <Text style={[styles.sectionHeaderText, GeneralStyles.whiteText]}>
                  {section.title}
                </Text>
              </View>
            }
            renderItem={({ item }) =>
              <View style={[styles.sectionItem, GeneralStyles.paddingContent]}>
                <Text style={[styles.sectionItemText, GeneralStyles.whiteText]}>
                  {item}
                </Text>
              </View>
            }
          />
          </View>
        </View>
        <View style={styles.horizontalList}>
          <Text style={styles.subTitle} >Markets</Text>
          { loading &&
            <View>
              <ActivityIndicator 
                color="#fff"
                size="large"
                style={GeneralStyles.loader}
              />
            </View>
          }
          <FlatList
            data={markets}
            keyExtractor={(item) => `${item.id}-${item.base}-${item.name}-${item.quote}`}
            renderItem={
              ({item})=>
                <CoinMarketItem 
                  market={item}
                />
            }
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  badgeContainer: {
    margin: 10,
    borderRadius: 20,
    borderTopLeftRadius: 40,
    backgroundColor: "rgba(100,100,100,0.1)",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 16,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 20,
  },
  subHeaderCoin: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subHeaderTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },
  subHeaderIcon: {
    width: 50,
    height: 50,
    marginLeft: 16,
  },
  // section: {
  //   maxHeight: 240, 
  // },
  sectionHeader: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  sectionHeaderText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 12,
  },
  horizontalList: {
    marginLeft: 5,
  },
  btnFavorite:{
    height: 40,
    width: 40,
    tintColor: "white",
  },
  btnFavoriteActive: {
    tintColor: Colors.yellow,
  },
});

export default CoinDetailsScreen;