import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, AsyncStorage, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import geolocation from '@react-native-community/geolocation';
import Header from '../../components/HeaderUser';
import { connect } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';

class MapsDirection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mitra: [],
            mapRegion: null,
            lastLat: null,
            lastLong: null,
            isLoading: false,
            lat:this.props.navigation.state.params.lat,
            long:this.props.navigation.state.params.long
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
        const destination = { latitude: -7.801357, longitude: 110.364797 };
        const GOOGLE_MAPS_APIKEY = 'AIzaSyBsPKumgKCIWwdeZSRYD-AQFZS8hihxtoM';
       
        return (
            <View style={styles.con}>
                <Header />
                <MapView
                    style={styles.map}
                    region={this.state.mapRegion}
                    showsUserLocation={true}
                    followUserLocation={true}
                    zoomControlEnabled={false}
                    showsCompass={true}
                    minZoomLevel={0}
                    maxZoomLevel={20}
                >
                     <MapViewDirections
            origin={{ 
                latitude: this.state.lastLat, 
                longitude: this.state.lastLong
            }}
            destination={{
                latitude: this.state.lat,
                longitude: this.state.long
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="#00b02f"
          />
            <Marker
                coordinate={{ 
                    latitude: this.state.lastLat, 
                    longitude: this.state.lastLong
                }}
                description={"testing"}
                title={"loaksi mitra"}
            />

            <Marker
                coordinate={{
                    latitude: this.state.lat,
                    longitude: this.state.long
                }}
                description={"testing"}
                title={"tujuan"}
            />
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
export default connect(mapStateToProps)(MapsDirection);
const styles = StyleSheet.create({
    con: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    orderan: {
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#005b96',
        height: '12%',
        width: '90%',
        margin: 20,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        opacity: 0.8

    },
    textOrder: {
        color: '#bdbdbd',
        fontStyle: 'italic',
        fontSize: 14,
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