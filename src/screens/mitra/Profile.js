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
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { updateFoto } from '../../publics/redux/actions/mitra'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idMitra: '',
            fullname: '',
            phone: '',
            email: '',
            image: null,
            imageSrc: null,
            lat: '',
            long: '',
            idCategory: '',
            mitra: []

        }
    }

    async componentDidMount() {
        const idMitra = await AsyncStorage.getItem('idMitra')
        const fullname = await AsyncStorage.getItem('fullname')
        const phone = await AsyncStorage.getItem('phone')
        const email = await AsyncStorage.getItem('email')
        const image = await AsyncStorage.getItem('image')
        const lat = await AsyncStorage.getItem('lat')
        const long = await AsyncStorage.getItem('long')
        const idCategory = await AsyncStorage.getItem('idCategory')
        await this.setState({
            idMitra,
            fullname,
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

    handleChoosePhoto = async () => {
        const options = {
          noData: true,
        }
    
        await ImagePicker.showImagePicker(options, response => {
          if (response.uri) {
            this.setState({ imageSrc: response })
          }
        })
      }

      updateImage = async () => {
        if (this.state.imageSrc !== null) {
    
          const formdata = new FormData()
          await formdata.append('image', {
            name: this.state.imageSrc.fileName,
            type: this.state.imageSrc.type || null,
            uri: this.state.imageSrc.uri
          })
          await this.props.dispatch(updateFoto(this.state.idMitra, formdata))
            .then(() => {
              this.setState({
                mitra: this.props.mitra,
                imageSrc: formdata,
                image: formdata
              })
              this.props.navigation.navigate('AuthHome')
            })
        } else {
          alert('Silahkan pilih foto terlebih dahulu!')
        }
      }

    render() {
        const { fullname,mitra, phone, email, image, imageSrc, idMitra, lat, long, idCategory } = this.state
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
                            <MenuItem onPress={this.hideMenu}>Edit Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={this.hideMenu} onPress={async () => {
                                await AsyncStorage.clear()
                                await AsyncStorage.setItem('welcome', 'udah')
                                await this.props.navigation.navigate('AuthHome')
                            }}>Sign Out</MenuItem>
                        </Menu>
                        <TouchableOpacity style={styles.image}
                            onPress={() => this.handleChoosePhoto()}>
                            {
                                imageSrc && 
                                (<Image
                                    source={{ uri: imageSrc.uri }}
                                    style={styles.image}
                                />) ||
                                image &&
                                (<Image
                                    source={{ uri: image }}
                                    style={styles.image}
                                />)
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.updateImage()}>
                            <Image 
                                style={{width:20, height:20, marginTop: -8, }}
                                source={require('../../assets/images/icon_edit_image.png')} />
                        </TouchableOpacity>
                        
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
                        <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('OrderList')}>
                            <View style={styles.card2}>
                                <Text style={styles.textCard2}> Orderan Beres </Text>
                                <Text style={styles.textCard2}> 20 </Text>
                            </View>
                        </TouchableOpacity>
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
    view2: {
        marginTop: 30
    },

    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 0,
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
        backgroundColor: '#005B96',
        marginTop: 20,
        marginBottom: 10,
        opacity: 0.8,

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
        flex: 1,
        flexDirection: 'row',
        height: 80,
        width: '80%',
        backgroundColor: '#005B96',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: 0.8,

        elevation: 5
    },
    card3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
        width: '80%',
        marginLeft: 37,
        backgroundColor: '#005B96',
        marginTop: 30,
        marginBottom: 10,
        bottom: 0,

        elevation: 5
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

        color: '#FFFFFF'
    },
    textCard3: {
        textAlign: 'center',
        fontSize: 16,

        color: '#FFFFFF'
    },
})

const mapStateToProps = state => {
    return {
      mitra: state.mitra
    }
  }

export default connect(mapStateToProps)(Profile)