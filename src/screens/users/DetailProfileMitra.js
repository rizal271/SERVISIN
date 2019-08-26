import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'

class Profile extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.view1}>
                    <Image 
                      source={require('../../assets/images/Engineer_icon.png')}
                      style={styles.image}
                    />
                    <Text style={styles.textCompanyName}> Tukang Gali Kubur </Text>
                    <Text style={styles.textPhoneNumber}> 082277435678 </Text>
                    <Text style={styles.textEmail}> kubur@gmail.com </Text>
                    <Image 
                      source = {require('../../assets/images/Chat_icon.png')}
                      style={styles.iconChat} 
                    />
                </View>
                <ScrollView>
                    <View style={styles.view2}>
                        <View style={styles.viewAlamat}>
                            <Text style={styles.alamat}> Alamat Lengkap: </Text>
                            <Text style={styles.isiAlamat}> Jln.Dimana, RT berapa, RW berapa, Kec.Apa, Kab/Kota.Apa, Porv.Apa, Negara.Mana </Text>
                            <TouchableOpacity style={styles.buttonLihatPeta}>
                                <Text style={styles.textButtonPeta}> Lihat Peta </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewDetailPerusahaan}>
                            <Text style={styles.textDetailPerusahaan}> Detail Perusahaan: </Text>
                            <Text style={styles.isiDetailPerusahaan}> 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.buttonOrder}>
                            <Text style={styles.textButtonOrder}> Order Sekarang </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 1, 
        backgroundColor: '#6497B1'
    },
    view2: {
        flex: 1.7,
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
        marginTop: 30
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

export default Profile