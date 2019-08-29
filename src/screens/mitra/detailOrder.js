import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import Header from '../../components/HeaderUser';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { getOrderMitraPending } from '../../publics/redux/actions/order';
import Geocoder from 'react-native-geocoder';

const width = Dimensions.get('screen').width;

class DetailOrderMitra extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        const idMitra = await AsyncStorage.getItem('idmitra')
        this.setState({ idMitra })
        this.setState({ isLoading: true })
        await this.props.dispatch(getOrderMitraPending(idMitra));
        this.setState({
            isLoading: false
        });
    }
    render() {
        const pending = this.props.order.orderList && this.props.order.orderList[0]
        var pos = {
            lat: Number(pending && pending.lat),
            lng: Number(pending && pending.long)
        };

        Geocoder.geocodePosition(pos).then(res => {
            this.setState({
                address: res[0].formattedAddress
            })
        })
        return (
            <>
                <StatusBar translucent backgroundColor="transparent" />
                <Header />
                <ScrollView>
                    <View style={style.container}>
                        <View style={style.wrapChat}>
                            <Text style={style.detailOrder}>
                                Detail Order
                            </Text>
                        </View>
                        <View style={style.wrapDetail}>
                            <View style={style.wrapText}>
                                <Text style={style.textKey}>
                                    Costumer
                            </Text>
                                <Text style={style.textValue}>
                                    BELUM BISA
                            </Text>
                            </View>
                            <View style={style.wrapText}>
                                <Text style={style.textKey}>
                                    Category :
                            </Text>
                                <Text style={style.textValue}>
                                    {pending&&pending.subName}
                            </Text>
                            </View>
                            <View style={style.wrapText}>
                                <Text style={style.textKey}>
                                    Estimasi Harga :
                            </Text>
                                <Text style={style.textValue}>
                                    Rp. {pending&&pending.price}
                            </Text>
                            </View>
                            <View style={[style.wrapText, { borderBottomColor: 'white' }]}>
                                <Text style={style.textKey}>
                                    Alamat:
                                </Text>
                                <TouchableOpacity style={style.btnDirection} onPress={() => this.props.navigation.navigate('MapsDirection')}>
                                    <Icon name="location-arrow" style={[style.textValue, { color: '#ffffff', fontSize: 25 }]} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.wrapAlamat}>
                                <Text>
                                    {this.state.address}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 30 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button onPress={() => this.props.navigation.navigate('ChatRoom', {
                                fullname: 'siapa'
                            })} style={{ backgroundColor: '#005B96', marginHorizontal: 25, opacity: 0.8 }}>
                                <Text style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    color: 'white',
                                    fontWeight: '700'
                                }}>Chat Customer</Text>
                            </Button>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button style={{ backgroundColor: '#ffffff', borderWidth: 3, borderColor: '#005B96', marginHorizontal: 25, marginVertical: 20 }}>
                                <Text style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    color: '#005B96',
                                    fontWeight: '700'
                                }}>Hubungi Kami!</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(DetailOrderMitra);
const style = StyleSheet.create({
    btnDirection: {
        backgroundColor: '#005B96',
        width: 35,
        height: 35,
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        marginBottom: 20,
        marginHorizontal: 20,
        marginVertical: 50
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