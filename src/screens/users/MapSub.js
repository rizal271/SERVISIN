import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, AsyncStorage, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import geolocation from '@react-native-community/geolocation';
import Header from '../../components/HeaderUser';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:this.props.navigation.state.params,
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    }
  };

  async componentDidMount() {
    this.watchID = geolocation.getCurrentPosition((position) => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    }, (error) => console.log(error));
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  render() {
    console.log(this.props.navigation.state.params);
    
    return (
      <View style={styles.con}>
        <Header />
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          zoomControlEnabled={true}
          showsCompass={true}
          minZoomLevel={0}
          maxZoomLevel={20}
        >
            <Marker
              coordinate={{
                latitude: -7.7685000,
                longitude: 110.3781497
              }}
              onPress={() => { this.props.navigation.navigate('DetailProfileMitra') }}>
              <View style={styles.mapCoor}>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566321024/img/blank-profile-picture-973460_960_720_wolhdp.png' }}
                  style={styles.image} />
                <Text style={styles.name}>NAMA</Text>
                <Text style={styles.cat}>KATEGORI</Text>
              </View>
            </Marker>
        </MapView>
      </View>
    );
  }
}
export default Maps;
const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  },
  map: {
    width: '100%',
    height: '90%'
  },
  mapCoor: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1%',
    alignSelf: 'center'
  },
  cat: {
    fontSize: 10,
    backgroundColor: 'red',
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5
  }
})