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
import MapView from 'react-native-maps'
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
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5,
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
            })
        }, (error) => console.warn(error));
    }
    render() {
        console.warn(this.state.address);

        return (
            <>
                <StatusBar translucent />
                <ScrollView style={style.scrollView}>
                    <MapView
                        region={this.state.mapRegion}
                        style={style.mapView}
                        showsUserLocation
                    >
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
                                    Kerusakan / Kebutuhan :
                            </Text>
                                <Text style={style.textValue}>
                                    asndijadsk askjdnajsd sadunasoidk asduinaisd asijdbnasdnas duasbbdniasd uansdbi
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
                    <TouchableOpacity style={style.batal} >
                        <Text style={style.batalText}>
                            Batalkan Service
                    </Text>
                    </TouchableOpacity>
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
    container: {
        paddingHorizontal: width * 0.05,
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 5,
        marginVertical: 20
    },
    detailOrder: {
        fontSize: 22,
        marginVertical: 10
    },
    wrapChat:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between'
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
        fontSize: 18,
        maxWidth: 100
    },
    textValue: {
        fontSize: 18,
        maxWidth: 180,
        textAlign: 'right'
    },
    batal: {
        backgroundColor: '#FF0000',
        marginHorizontal: width * 0.05,
        borderRadius: 50,
        marginBottom: 50
    },
    batalText: {
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2
    },
    wrapAlamat: {
        width: '100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: '2%'
    },
    textAlamatKey: {
        fontSize: 18
    },
    textAlamatValue: {
        fontSize: 15,
        paddingHorizontal: '2%'
    },
    chat: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})