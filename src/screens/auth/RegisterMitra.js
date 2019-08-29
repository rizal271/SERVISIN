import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StatusBar,
    Picker,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { registerMitra } from '../../publics/redux/actions/mitra';
import { getCategory } from '../../publics/redux/actions/category'

class RegisterMitra extends Component {
    static navigationOptions = {
        header: null,
        footer: null
    }

    constructor(props) {
        super(props)
        this.state = {
            mitra: [],
            fullname: '',
            email: '',
            nohp: '',
            idSubCat: 0,
            password: '',
            lat: 0,
            long: 0,
            category: []
        }
    }

    componentDidMount = async () => {
        await this.getCategory()
    }

    getCategory() {
        this.props.dispatch(getCategory())
            .then(() => {
                this.setState({ category: this.props.category.categoryList })
            })
    }

    render() {
        const mitraRegister = () => {
            const { fullname, email, nohp, idSubCat, password, lat, long } = this.state
            if (fullname !== '' && email !== '' && nohp !== '' && password !== '') {
                this.state.mitra.push({
                    fullname: fullname,
                    email: email,
                    nohp: nohp,
                    idCategory: idSubCat,
                    password: password,
                    lat: lat,
                    long: long
                });
                console.log(this.state.mitra);
                add()
                this.setState((prevState) => ({
                    modal: !prevState.modal
                }));
                console.log(this.state.mitra);
                Alert.alert(
                    'Berhasil',
                    'Sign up berhasil!',
                    [
                        { text: 'Ok', onPress: () => this.props.navigation.goBack() }
                    ]
                )
            } else {
                alert('Isi data yang kosong')
            }
        };
        let add = async () => {
            await this.props.dispatch(registerMitra(this.state.mitra[0]))
        };
        console.warn('cate: ', this.state.category)
        return (
            <ScrollView>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.container}>
                    <Text style={styles.textSignUp}> SIGN UP </Text>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/Engineer_icon.png')}
                    />
                    <Text style={styles.textUser}> Mitra </Text>
                    <TextInput
                        placeholderTextColor='white'
                        placeholder='Fullname...'
                        style={styles.textInput}

                        value={this.state.fullName}
                        onChangeText={val => this.setState({ 'fullname': val })}
                    />
                    <TextInput
                        placeholderTextColor='white'
                        placeholder='Phone Number...'
                        style={styles.textInput}

                        value={this.state.phoneNumber}
                        onChangeText={val => this.setState({ 'nohp': val })}
                    />
                    <Picker
                        style={styles.textInput}
                        mode='dropdown'
                        selectedValue={this.state.idSubCat}
                        onValueChange={(value) => this.setState({ idSubCat: value })}>

                        {this.state.category.map((value) => {
                            return (<Picker.Item label={value.catName} value={value.idCategory} />)
                        })}
                    </Picker>
                    <TextInput
                        placeholderTextColor='white'
                        placeholder='Email...'
                        style={styles.textInput}

                        value={this.state.email}
                        onChangeText={val => this.setState({ 'email': val })}
                    />
                    <TextInput
                        placeholderTextColor='white'
                        placeholder='Password...'
                        style={styles.textInput}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={val => this.setState({ 'password': val })}

                    />
                    <TouchableOpacity style={styles.buttonSignUp} onPress={mitraRegister}>
                        <Text style={styles.textButton}> Sign Up </Text>
                    </TouchableOpacity>
                    <Text style={styles.alreade}> Already have account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.textLogin}> Login here </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state => {
    return {
        mitra: state.mitra,
        category: state.category
    };
};
export default connect(mapStateToProps)(RegisterMitra);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6497B1',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    textSignUp: {
        width: 180,
        height: 38,
        marginBottom: 20,
        marginTop: 7,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        lineHeight: 42,
        textAlign: 'center',

        color: '#FFFFFF',
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 7,
    },
    textUser: {
        width: 96,
        height: 24,
        marginBottom: 20,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',

        color: '#FFFFFF',
    },
    textInput: {
        padding: 10,
        width: '90%',
        marginBottom: 20,

        color: 'white',
        backgroundColor: '#B3CDE0',
    },
    buttonSignUp: {
        width: 115,
        height: 42,
        marginBottom: 20,
        marginLeft: -210,

        backgroundColor: '#005B96',
    },
    textButton: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 18,

        color: '#FFFFFF',
    },
    alreade: {
        alignSelf: 'flex-end',
        marginTop: -50,
        marginRight: 15,

        color: '#FFFFFF',
    },
    textLogin: {
        alignSelf: 'flex-end',
        marginTop: -0,
        marginLeft: 180,
        textDecorationLine: 'underline',

        color: '#FFFFFF',
    }
})
