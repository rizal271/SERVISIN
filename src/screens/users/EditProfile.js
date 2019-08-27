import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native'


export class EditProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />

                <View style={styles.background}>
                    <Text style={styles.txtTitle}>Edit Profile</Text>
                    <Image source={require('../../assets/login.png')} style={styles.img} />
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input} on placeholderTextColor="#ffffff" placeholder="Fullname..." />
                    <TextInput style={styles.input} placeholderTextColor="#ffffff" placeholder="Phone number..." keyboardType="phone-pad" />
                    <View style={styles.btn}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.btnEdit}>
                            <Text style={styles.txtEdit}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default EditProfile

const styles = StyleSheet.create({
    txtEdit: {
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 18,
        letterSpacing: 1,
    },
    btn: {
        marginHorizontal: 35,
        marginVertical: 20
    },
    btnEdit: {
        backgroundColor: '#005B96',
        width: '100%',
        height: 40,
        borderRadius: 20,
        elevation: 3,
    },
    form: {
        width: '100%',
        marginHorizontal: 50,
        position: 'absolute',
        top: 200,
    },
    input: {
        backgroundColor: '#6497B1',
        color: '#ffffff',
        elevation: 2,
        marginVertical: 10,
        marginHorizontal: 40,
        paddingLeft: 20
    },
    txtTitle: {
        position: 'absolute',
        top: 40,
        color: '#ffffff',
        fontSize: 18
    },
    img: {
        position: 'absolute',
        top: 80,
        width: 100,
        height: 100
    },
    background: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 125,
        backgroundColor: '#6497B1',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})