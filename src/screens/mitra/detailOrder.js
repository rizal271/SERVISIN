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
} from 'react-native';
import Header from '../../components/HeaderUser';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'native-base';
const width = Dimensions.get('screen').width
export default class DetailOrder extends Component {
    render() {
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
                                    Rp. 200.000,00
                            </Text>
                            </View>
                            <View style={[style.wrapText, { borderBottomColor: 'white' }]}>
                                <Text style={style.textKey}>
                                    Alamat:
                                </Text>
                                <TouchableOpacity style={style.btnDirection}>
                                    <Icon name="location-arrow" style={[style.textValue, { color: '#ffffff', fontSize: 25 }]} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.wrapAlamat}>
                                <Text>JALAN JALAN</Text>
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