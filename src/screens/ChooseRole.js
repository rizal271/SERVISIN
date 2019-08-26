import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class ChooseRole extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.logo}>
                    <Image source={require('../assets/images/logo.png')} style={styles.logoImg} />
                </View>
                <Text style={styles.appName}>SERVISIN</Text>
                <Text style={styles.titleScreen}>Choose your role</Text>
                <View style={styles.chooseRoleRow}>
                    <View style={styles.chooseRoleCol}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/User_icon.png')} style={styles.imgRole} />
                            <Text style={styles.txtRole}>User</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chooseRoleCol}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/Engineer_icon.png')} style={styles.imgRole} />
                            <Text style={styles.txtRole}>Mitra</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.txtFooter}>Dev by Mauchily Corp.</Text>
                </View>
            </View>
        )
    }
}
export default ChooseRole
const styles = StyleSheet.create({
    txtFooter: {
        color: '#ffffff',
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30
    },
    txtRole: {
        color: '#ffffff',
        fontSize: 18,
        marginVertical: 10,
        textAlign: 'center'
    },
    imgRole: {
        width: 65,
        height: 65,
    },
    chooseRoleCol: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    chooseRoleRow: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 120
    },
    titleScreen: {
        color: '#ffffff',
        fontSize: 18
    },
    appName: {
        color: '#ffffff',
        marginVertical: 20,
        fontSize: 24
    },
    logoImg: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
    logo: {
        borderRadius: 100 / 2,
        elevation: 10,
        backgroundColor: '#ffffff'
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6497B1'
    },
})