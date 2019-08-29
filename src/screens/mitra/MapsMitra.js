import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, AsyncStorage, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/HeaderUser';
import { connect } from 'react-redux';
import { Database } from '../../publics/firebase/config'

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mitra: [],
            mapRegion: null,
            lastLat: 0,
            lastLong: 0,
            isLoading: false
        }
    };

    componentDidMount() {
        Geolocation.getCurrentPosition((position) => {
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            this.setState({
                mapRegion: region
            })
        })
        setInterval(() => this.getCurrentPositionMitra(), 15000)
        setInterval(() => this.updateCoordsMitra(), 15000)
    }

    async getCurrentPositionMitra() {
        await Geolocation.getCurrentPosition((location) => {

            this.setState({
                lastLat: location.coords.latitude,
                lastLong: location.coords.longitude
            })
            console.warn(location)
        })
    }

    updateCoordsMitra = async () => {
        const idMitra = await AsyncStorage.getItem('idmitra')
        Database.ref('/mitra').orderByChild('idMitra').equalTo(idMitra).on('child_added', (result) => {
            Database.ref('/mitra/' + idMitra).update({
                latitude: this.state.lastLat,
                longitude: this.state.lastLong
            })
        })
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
                    zoomControlEnabled={false}
                    showsCompass={true}
                    minZoomLevel={0}
                    maxZoomLevel={20}
                >
                </MapView>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ChatList') }} style={styles.chats}>
                    <Text style={styles.textOrder}>"Your Chat"</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('DetailOrderMitra') }} style={styles.orderan}>
                    <Text style={styles.textOrder}>"Your Service"</Text>
                </TouchableOpacity >
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
    chats:{
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#005b96',
        height: '8%',
        width: '90%',
        margin: 20,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '10%',
        opacity: 0.9
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