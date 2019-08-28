import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    StatusBar,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mitra: '',
            phone: '',
            email: '',
            image: '',
            lat: '',
            long: '',
            idCategory: '',

        }
    }

    async componentDidMount() {
        const mitra = await AsyncStorage.getItem('fullname')
        const phone = await AsyncStorage.getItem('phone')
        const email = await AsyncStorage.getItem('email')
        const image = await AsyncStorage.getItem('image')
        const lat = await AsyncStorage.getItem('lat')
        const long = await AsyncStorage.getItem('long')
        const idCategory = await AsyncStorage.getItem('idCategory')
        await this.setState({
            mitra,
            phone,
            email,
            image,
            lat,
            long,
            idCategory
        })
        console.warn('phone', phone);

    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref
    }

    hideMenu = () => {
        this._menu.hide()
    }

    showMenu = () => {
        this._menu.show()
    }

    render() {
        const { mitra, phone, email, image, lat, long, idCategory } = this.state
        return (
            <>
                <ScrollView style={{ flex: 1 }}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <View style={styles.view1}>


                        <Menu
                            style={{ marginLeft: 200, }}
                            ref={this.setMenuRef}
                            button={<Text onPress={this.showMenu} style={{ width: 15, height: 20, marginLeft: 313, marginTop: 35 }}>
                                <Image
                                    style={{ width: 15, height: 20, marginLeft: 313, marginTop: 35 }}
                                    source={require('../../assets/images/Menue-Icon-PNG.png')} ></Image>
                            </Text>}
                        >
                            <MenuItem onPress={this.hideMenu}>Income List </MenuItem>
                            <MenuItem onPress={this.hideMenu}>Order List</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Edit Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={this.hideMenu} onPress={async () => {
                                await AsyncStorage.clear()
                                await AsyncStorage.setItem('welcome', 'udah')
                                await this.props.navigation.navigate('AuthHome')
                            }}>Sign Out</MenuItem>
                        </Menu>

                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                        />
                        <Text style={styles.text}> {mitra} </Text>
                        <Text style={styles.text}>{phone} </Text>
                        <Text style={styles.text}> {email} </Text>
                    </View>

                    <View style={styles.view2}>
                        <View style={styles.card1}>
                            <View style={styles.col1}>
                                <Text style={styles.textCol1}> Income </Text>
                                <Text style={styles.textCol1}> Total Orderan </Text>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.textCol2}> Rp.1.500.000 </Text>
                                <Text style={styles.textCol2}> 78 </Text>
                            </View>
                        </View>
                        <View style={styles.card2}>
                            <Text style={styles.textCard2}> Orderan Beres </Text>
                            <Text style={styles.textCard2}> 20 </Text>
                        </View>
                        <View style={styles.card3}>
                            <Text style={styles.textCard3}> Orderan Pending </Text>
                            <Text style={styles.textCard3}> 14 </Text>
                        </View>
                        <View style={styles.viewDetailPerusahaan}>
                            <Text style={styles.textDetailPerusahaan}> Detail Perusahaan: </Text>
                            <Text style={styles.isiDetailPerusahaan}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    view1: {
        height: 240,
        backgroundColor: '#6497B1',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 5,
        marginTop: -15
    },
    text: {
        fontSize: 18,
        color: '#FFFFFF',
        // marginBottom: 2,
    },
    card1: {
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        marginLeft: 37,
        backgroundColor: '#B3CDE0',
        marginTop: 20,
        marginBottom: 20,

        elevation: 5
    },
    col1: {
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 17,
    },
    col2: {
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 17,
    },
    textCol1: {
        fontSize: 18,
        marginBottom: 20,

        color: '#FFFFFF',
    },
    textCol2: {
        fontSize: 18,
        marginBottom: 20,

        color: '#FFFFFF',
    },
    card2: {
        height: 120,
        width: 120,
        marginLeft: 37,
        marginTop: 15,
        backgroundColor: '#005B96',

        elevation: 3,
    },
    card3: {
        height: 120,
        width: 120,
        marginLeft: 205,
        marginTop: -121,
        backgroundColor: '#005B96',

        elevation: 3,
    },
    viewDetailPerusahaan: {
        width: '80%',
        elevation: 3.5,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        marginLeft: 37,
        marginTop: 30,

        elevation: 5
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
    textCard2: {
        textAlign: 'center',
        fontSize: 19,
        marginBottom: 20,
        marginTop: 5,

        color: '#FFFFFF'
    },
    textCard3: {
        textAlign: 'center',
        fontSize: 19,
        marginBottom: 20,
        marginTop: 5,

        color: '#FFFFFF'
    },
})

export default Profile