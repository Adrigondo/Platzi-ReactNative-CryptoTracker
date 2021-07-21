import { entries } from "lodash";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

class TravelScreen extends React.Component{
  state= {
    region: {
      latitude: 28.6710638,
      longitude: -106.1346581,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    error: undefined,
  };

  onRegionChange(region) {
    this.setState({ region: region });
  }
  
  componentDidMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    const { status } = await Permissions.askAync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("PERMISSION NOT GRANTED!");
      this.setState({error: "PERMISSION NOT GRANTED"})
    } else {
      const location = await Location.getCurrentPositionAsync();
      this.setState({
        region: {
          ... this.state.region,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        error: undefined,
      });
    }
  }

  render() {
    const { region } = this.state;
    const { latitude, longitude } = region;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          onRegionChange={()=>this.onRegionChange()}
        >
          <Marker
            coordinate={{latitude,longitude}}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default TravelScreen;