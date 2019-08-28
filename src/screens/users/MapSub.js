import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, AsyncStorage, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import geolocation from '@react-native-community/geolocation';
import Header from '../../components/HeaderUser';
import { connect } from 'react-redux';
import { getMitraByCategory } from '../../publics/redux/actions/mitra';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mitra: [],
      mapRegion: null,
      lastLat: null,
      lastLong: null,
      isLoading: false
    }
  };

  async componentDidMount() {
    this.setState({ isLoading: true })
    idCat = this.props.navigation.state.params.idSubCat
    await this.props.dispatch(getMitraByCategory(idCat));
    this.setState({
      mitra: this.props.mitra.mitraList.result,
      isLoading: false
    });
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
          {this.state.mitra.map((item, index) =>
            <Marker
              key={index}
              coordinate={{
                latitude: Number(item.lat),
                longitude: Number(item.long)
              }}
              onPress={() => { this.props.navigation.navigate('DetailProfileMitra', item) }}>
              <View style={styles.mapCoor}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image} />
                <Text style={styles.name}>{item.fullname}</Text>
                <Text style={styles.cat}>{item.subName}</Text>
              </View>
            </Marker>)}
        </MapView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    mitra: state.mitra
  };
};
export default connect(mapStateToProps)(Maps);
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