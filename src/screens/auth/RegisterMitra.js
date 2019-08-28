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
    Picker
} from 'react-native';
import { connect } from 'react-redux';
import { registerMitra } from '../../publics/redux/actions/mitra';


class RegisterMitra extends Component {
    static navigationOptions = {
        header: null,
        footer: null
    }

    constructor(props) {
        super(props)
        this.state = {
            mitra: []
        }
    }

    render() {
        const mitraRegister = () => {
            this.state.mitra.push({
                fullname: this.state.fullname,
                email: this.state.email,
                nohp: this.state.noHp,
                idCategory: this.state.idCategory,
                password: this.state.password,
                lat: 0,
                long: 0
            });
            console.log(this.state.mitra);
            add()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
            console.log(this.state.mitra);
        };
        let add = async () => {
            await this.props.dispatch(registerMitra(this.state.mitra[0]))
        };
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
                        onChangeText={val => this.setState({ 'noHp': val })}
                    />
                    <Picker
                        style={styles.textInput}
                        mode='dropdown'
                        selectedValue={this.state.idCategory}
                        onValueChange={(value) => this.setState({ idCategory: value })}>
                        <Picker.Item label='Category' value='' color='white' />
                        <Picker.Item label='Otomotif' value='1' />
                        <Picker.Item label='Elektronik' value='2' />
                        <Picker.Item label='Builders' value='3' />
                        <Picker.Item label='Emergensy' value='4' />
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
        mitra: state.mitra
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
