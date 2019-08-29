import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import GeoLocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoder'
const width = Dimensions.get('screen').width
export default class DetailOrder extends Component {
    static navigationOptions = {
        headerTransparent: true,
    }
    constructor(props) {
        super(props)
        this.state = {
            mapRegion: null,
            address: null,
        }
    }
    componentDidMount = async () => {
        await GeoLocation.getCurrentPosition(async (position) => {
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 0.9,
                longitudeDelta: 0.00421 * 0.9,
            }
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            await Geocoder.geocodePosition(pos).then(res => {
                this.setState({
                    address: res[0].formattedAddress
                })
            })
            this.setState({
                mapRegion: region,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        }, (error) => console.warn(error));
    }
    render() {
        console.warn(this.state.address);

        return (
            <>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <ScrollView style={style.scrollView}>
                    <MapView
                        region={this.state.mapRegion}
                        style={style.mapView}
                        showsUserLocation
                        pitchEnabled={false}
                        rotateEnabled={false}
                        scrollEnabled={false}
                        zoomEnabled={false}
                    >
                        <Marker
                            coordinate={{ latitude: this.state.latitude || 0, longitude: this.state.longitude || 0 }}
                        >
                            <Image style={style.marker} source={require('../../assets/images/mitra.png')} />
                        </Marker>
                        <Marker
                            coordinate={{ latitude: this.state.latitude || 0, longitude: this.state.longitude || 0 }}
                        >
                            <Image style={style.marker} source={require('../../assets/images/User_icon.png')} />
                        </Marker>
                    </MapView>
                    <View style={style.container}>
                        <View style={style.wrapChat}>
                            <Text style={style.detailOrder}>
                                Detail Order
                            </Text>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/Chat_icon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={style.wrapDetail}>
                            <View style={style.wrapText}>
                                <Text style={style.textKey}>
                                    Category :
                            </Text>
                                <Text style={style.textValue}>
                                    aabsbd
                            </Text>
                            </View>
                            <View style={style.wrapText}>
                                <Text style={style.textKey}>
                                    Estimasi Harga :
                            </Text>
                                <Text style={style.textValue}>
                                    aabsbd
                            </Text>
                            </View>
                            <View style={style.wrapAlamat}>
                                <Text style={style.textAlamatKey}>
                                    Alamat:
                                </Text>
                                <Text style={style.textAlamatValue}>
                                    {this.state.address}
                                </Text>
                            </View>
                            <View style={style.wrapAlamat}>
                                <Text style={style.textAlamatKey}>
                                    Alamat Service:
                                </Text>
                                <Text style={style.textAlamatValue}>
                                    asadnasdkj
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}
const style = StyleSheet.create({
    scrollView: {
        height: '100%'
    },
    mapView: {
        width: '100%',
        height: 300,
    },
    marker: {
        width: 30,
        height: 30
    },
    container: {
        paddingHorizontal: width * 0.05,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 5,
        marginBottom: 20
    },
    detailOrder: {
        fontSize: 18,
        marginVertical: 10
    },
    wrapChat: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapDetail: {
        marginHorizontal: 5
    },
    wrapText: {
        flex: 2,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: '2%'
    },
    textKey: {
        fontSize: 15,
        maxWidth: 100
    },
    textValue: {
        fontSize: 15,
        maxWidth: 180,
        textAlign: 'right'
    },
    wrapAlamat: {
        width: '100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: '2%'
    },
    textAlamatKey: {
        fontSize: 15
    },
    textAlamatValue: {
        fontSize: 13,
        paddingHorizontal: '2%'
    },
    chat: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})