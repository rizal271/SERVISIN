import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking,
    Platform,
    ActivityIndicator
} from 'react-native';
import Geocoder from 'react-native-geocoder';
import { connect } from 'react-redux';
import { getMitraById } from '../../publics/redux/actions/mitra';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mitra: [],
            isLoading: false,
        }
    };
    diaCall = () => {
        let phoneNumber = ''
        if (Platform.OS = 'android') {
            phoneNumber = `tel: ${'085358483247'}`
        } else {
            phoneNumber = `telprompt: ${'085358483247'}`
        }
        Linking.openURL(phoneNumber)
    }
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        const idMitra = this.props.navigation.state.params.idMitra
        await this.props.dispatch(getMitraById(idMitra));
        this.setState({
            mitra: this.props.mitra.mitraList.result[0],
            isLoading: false
        });
        var pos = {
            lat: Number(this.state.mitra.lat),
            lng: Number(this.state.mitra.long)
        };
        await Geocoder.geocodePosition(pos).then(res => {
            this.setState({
                address: res[0].formattedAddress
            })
        })
    }
    render() {
        const data = this.state.mitra && this.state.mitra
        console.warn('dats', data);

        return (
            <>
                {this.state.isLoading == true ? <ActivityIndicator size={"large"} /> :
                    <View style={{ flex: 1 }}>
                        <View style={styles.view1}>
                            <Image
                                source={{ uri: data.imageMitra }}
                                style={styles.image}
                            />
                            <Text style={styles.textCompanyName}>{data.fullname}</Text>
                            <Text style={styles.textPhoneNumber}>{data.nohp}</Text>
                            <Text style={styles.textEmail}>{data.email}</Text>
                            <Text style={styles.textPrice}>Rp.{data.price}</Text>

                            <TouchableOpacity onPress={this.diaCall}>
                                <Image
                                    source={require('../../assets/images/in_call.png')}
                                    style={styles.iconCall}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatRoom', {
                                uid: data && data.idMitra, name: data && data.fullname, image: data && data.imageMitra, idphone: data.IDponselMitra
                            })}>
                                <Image
                                    source={require('../../assets/images/Chat_icon.png')}
                                    style={styles.iconChat}
                                />
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View style={styles.view2}>
                                <View style={styles.viewAlamat}>
                                    <Text style={styles.alamat}> Alamat Lengkap: </Text>
                                    <Text style={styles.isiAlamat}>{this.state.address}</Text>
                                </View>
                                <View style={styles.viewDetailPerusahaan}>
                                    <Text style={styles.textDetailPerusahaan}> Detail Mitra: </Text>
                                    <Text style={styles.isiDetailPerusahaan}>
                                        Berpengalaman di bidang Service
                            </Text>
                                </View>
                                <TouchableOpacity style={styles.buttonOrder} onPress={() => this.props.navigation.navigate('Payment', { category: data.subName, price: data.price, idMitra: data.idMitra, IDponselMitra: data.IDponselMitra })}>
                                    <Text style={styles.textButtonOrder}> Order Sekarang </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>}
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        mitra: state.mitra
    };
};
export default connect(mapStateToProps)(Profile);
const styles = StyleSheet.create({
    view1: {
        flex: 8,
        backgroundColor: '#6497B1'
    },
    view2: {
        // flex: 1.7,
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: 30,
        marginTop: 25
    },
    iconChat: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 290,
        marginTop: 10
    },
    iconCall: {
        width: 43,
        height: 43,
        borderRadius: 50,
        marginLeft: 290,
        marginTop: -20
    },
    textCompanyName: {
        position: 'absolute',
        left: 20,
        top: 134,

        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',

        color: '#FFFFFF'
    },
    textPhoneNumber: {
        position: 'absolute',
        left: 20,
        top: 156,

        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',

        color: '#FFFFFF'
    },
    textEmail: {
        position: 'absolute',
        left: 20,
        top: 179,

        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',

        color: '#FFFFFF'
    },
    textPrice: {
        position: 'absolute',
        left: 20,
        top: 200,

        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',

        color: '#FFFFFF'
    },
    viewAlamat: {
        width: '95%',
        marginTop: 20,
        marginBottom: 12,

        backgroundColor: '#FFFFFF',
        elevation: 3.5
    },
    alamat: {
        marginLeft: 10,
        fontSize: 18,
        marginBottom: 5
    },
    buttonLihatPeta: {
        width: 100,
        height: 30,
        marginBottom: 5,
        borderRadius: 15,
        marginLeft: '37%',

        backgroundColor: '#005B96'
    },
    textButtonPeta: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 4
    },
    isiAlamat: {
        marginBottom: 40,
        marginLeft: 10
    },
    viewDetailPerusahaan: {
        width: '95%',
        elevation: 3.5,
        backgroundColor: '#FFFFFF',
        marginBottom: 30
    },
    textDetailPerusahaan: {
        fontSize: 18,
        marginLeft: 8,
        marginBottom: 5,
    },
    isiDetailPerusahaan: {
        marginLeft: 10,
        marginBottom: 10,
    },
    buttonOrder: {
        width: 300,
        height: 40,

        backgroundColor: '#005B96',
        borderRadius: 20,
    },
    textButtonOrder: {
        textAlign: 'center',
        marginTop: 10,

        color: '#FFFFFF'
    }

})