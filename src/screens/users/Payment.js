import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    Picker,
    TextInput,
    ScrollView,
    Alert
} from 'react-native'
const width = Dimensions.get('screen').width
export default class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentType: 'ditempat',
            idMitra:''
        }
    }
    alert=async()=>{
        await Alert.alert('Info','Masih Dalam Pengembangan')
        this.setState({paymentType:'ditempat'})
    }
    render() {
        console.warn(this.state.paymentType);
        if(this.state.paymentType === 'cc'){
            this.alert()
        }
        return (
            <>
                <View style={style.header}>
                    <TouchableOpacity style={style.back} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../../assets/images/back.png')} style={style.backImage} />
                    </TouchableOpacity>
                    <Text style={style.pembayaran}>Pembayaran</Text>
                </View>
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
                                    aabsbd
                            </Text>
                            </View>
                            <View style={style.wrapPayment}>
                                <Text style={style.textPayment}>
                                    Pembayaran Via:
                                </Text>
                                <Picker
                                    selectedValue={this.state.paymentType}
                                    style={style.picker}
                                    onValueChange={(itemValue) =>
                                        this.setState({ paymentType: itemValue })
                                    }>
                                    <Picker.Item label="Bayar Di tempat" value="ditempat" />
                                    <Picker.Item label="Bayar Dengan Kartu Kredit" value="cc" />
                                </Picker>
                            </View>
                            <TouchableOpacity style={style.bayar} activeOpacity={0.5}>
                                <Text style={style.bayarText}>
                                    Bayar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

const style = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        elevation: 4,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    back: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginHorizontal: 20
    },
    backImage: {
        height: '100%',
        width: '100%'
    },
    pembayaran: {
        height: '100%',
        textAlignVertical: 'center',
        fontWeight: '600',
        fontSize: 25
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
    wrapDetail: {
        marginHorizontal: 5
    },
    wrapText: {
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
    wrapPayment: {
        width: '100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: '2%'
    },
    textPayment: {
        fontSize: 15
    },
    wrapKartu: {
        width: '100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: '2%'
    },
    textKartu: {
        fontSize: 15
    },
    textKartuInfo: {
        marginVertical: 20,
        marginHorizontal: 10
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#005b96'
    },
    textInputPayment: {
        borderBottomWidth: 1,
        borderColor: '#005b96',
        width: '35%'
    },
    bayar: {
        marginVertical: 10,
        backgroundColor: '#005b96',
        paddingVertical: 15,
        borderRadius: 50
    },
    bayarText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: '700',
        color:'#fff'
    },
    picker: {
        width: '100%'
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
