import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import StorageApp from '../../libs/storageApp';
import Http from '../../libs/http';

import Colors from '../../resources/colors';
import GeneralStyles from '../../resources/generalStyles';

import FavoritesEmptyState from './FavoritesEmptyState';
import CoinsItem from '../coins/CoinsItem';
import Searcher from '../general/Searcher';

class FavoritesScreen extends React.Component {
  state = {
    favoritesID: [],
    favorites: {},
    favoritesFiltered: {},
    loading: false,
    error: undefined,
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', this.getFavoritesID);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getFavoritesID);
  }

  getFavoritesID = async () => {
    this.setState({ loading: true });
    try {
      const allKeys = await StorageApp.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes('favorite-'));
      // console.log("Keys:", keys);

      var favoritesID = await StorageApp.instance.multiGet(keys);
      favoritesID = favoritesID.map((fav) => JSON.parse(fav[1]));
      // console.log('FavoritesID:', favoritesID);
      this.setState({ favoritesID, loading: false }, () => this.getCoins());
    } catch (error) {
      console.log('Get Favorites Error:', error);
    }
  };

  handlePress = (coin) => {
    // console.log("Go to detail", coin);
    this.props.navigation.navigate('CoinDetail', { coin });
  };

  getCoins = async () => {
    this.setState({
      loading: true,
      error: undefined,
    });
    const { favoritesID } = this.state;
    try {
      const response = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/'
      );

      var favorites = response.data;
      favorites = favorites.filter((coin) => {
        if(favoritesID.includes(coin.id)){
          // console.log(coin)
          return true;
        }
      });
      // console.log(favorites);
      this.setState({
        loading: false,
        favorites: favorites,
        favoritesFiltered: favorites,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
    // console.log("Coins:", this.filteredCoins);
  };

  handleSearch = (query) => {
    const { favorites } = this.state;

    const favoritesFiltered = favorites.filter((coin) => {
      let coinNameClean = coin.name.toLowerCase();
      let coinSymbolClean = coin.symbol.toLowerCase();
      let queryClean = query.toLowerCase();
      return (
        coinNameClean.includes(queryClean) ||
        coinSymbolClean.includes(queryClean)
      );
    });
    this.setState({ favoritesFiltered: favoritesFiltered });
  };

  render() {
    const { favorites, favoritesFiltered, loading } = this.state;
    // console.log(favorites);
    return (
      <View style={styles.container}>
        {!favorites.length && <FavoritesEmptyState />}
        {favorites.length > 0 && (
          <View>
            <Searcher
              onChange={this.handleSearch}
              placeholder={"Search coins..."}
            />
            <FlatList
              data={favoritesFiltered}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CoinsItem item={item} onPress={() => this.handlePress(item)} />
              )}
            />
          </View>
        )}
        {loading && (
          <ActivityIndicator
            color="#fff"
            size="large"
            style={GeneralStyles.loader}
          />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
});
export default FavoritesScreen;
