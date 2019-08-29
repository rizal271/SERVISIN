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
    Alert,
    AsyncStorage
} from 'react-native'
import { postOrder } from '../../publics/redux/actions/orderUser'
import { connect } from 'react-redux'
import { postNotifMitra } from '../../publics/redux/actions/notif';
const width = Dimensions.get('screen').width
class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            methodPay: 'ditempat',
            idMitra: this.props.navigation.state.params.idMitra,
            idUser: '',
            totalPay: this.props.navigation.state.params.price,
        }
    }
    alert = async () => {
        await Alert.alert('Info', 'Masih Dalam Pengembangan')
        this.setState({ methodPay: 'ditempat' })
    }
    bayar = async () => {
        console.warn(this.state);
        
        if (this.state.idMitra === '' || this.state.idUser === '' || this.state.totalPay === '' || this.state.methodPay === '') {
            Alert.alert('Warning', 'Something Went Wrong')
        } else {
            const data = {
                idUser: this.state.idUser,
                idMitra: this.state.idMitra,
                methodPay: this.state.methodPay,
                totalPay: this.state.totalPay
            }
            const notif = {
                msg:`${this.props.navigation.state.params.category}`,
                phoneid:this.props.navigation.state.params.IDponselMitra,
                header:'New Order'
            }
            console.warn(this.props.navigation.state.params);
            
            await this.props.dispatch(postNotifMitra(notif))
            await this.props.dispatch(postOrder(data))
            if (this.props.order.orderList === '') {
                Alert.alert('Warning', 'Something Went Wrong')
            }else{
                await Alert.alert('Info', 'Your order on process')
                this.props.navigation.navigate('Homeuser')
            }
        }
    }
    componentDidMount = () => {
        AsyncStorage.getItem('idUser', (error, result) => {
            this.setState({
                idUser: result
            })
        })
    }

    render() {
        console.warn(this.state.methodPay);
        if (this.state.methodPay === 'cc') {
            this.alert()
        }
        return (
            <>
                <View style={style.header}>
                    <TouchableOpacity style={style.back} onPress={() => this.props.navigation.goBack()}>
                        {/* <Image source={require('../../assets/images/back.png')} style={style.backImage} /> */}
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
                                    {this.props.navigation.state.params.category}
                                </Text>
                            </View>
                            <View style={style.wrapText}>
                                <Text style={style.textKey}>
                                    Estimasi Harga :
                            </Text>
                                <Text style={style.textValue}>
                                    {this.props.navigation.state.params.price}
                                </Text>
                            </View>
                            <View style={style.wrapPayment}>
                                <Text style={style.textPayment}>
                                    Pembayaran Via:
                                </Text>
                                <Picker
                                    selectedValue={this.state.methodPay}
                                    style={style.picker}
                                    onValueChange={(itemValue) =>
                                        this.setState({ methodPay: itemValue })
                                    }>
                                    <Picker.Item label="Bayar Di tempat" value="ditempat" />
                                    <Picker.Item label="Bayar Dengan Kartu Kredit" value="cc" />
                                </Picker>
                            </View>
                            <TouchableOpacity style={style.bayar} activeOpacity={0.5} onPress={this.bayar}>
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
const mapStateToProps = state => {
    return {
        order: state.order
    }
}
export default connect(mapStateToProps)(Payment)
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
        color: '#fff'
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
