import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import { login as loginMitra } from '../../publics/redux/actions/mitra'
import { login as loginUser } from '../../publics/redux/actions/user'
import { connect } from 'react-redux'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    _handleLogin = async (data) => {
        await this.props.dispatch(loginMitra(data))
            .then(() => {
                this.props.navigation.navigate('AuthHome')
            })
            .catch((error) => {
                alert(error)
            })
    }

    render() {
        const { email, password } = this.state
        const data = {
            email: email,
            password: password
        }
        return (
            <ScrollView style={style.body} keyboardShouldPersistTaps={'always'}>
                <View style={style.container}>
                    <Text style={style.signIn}>
                        SIGN IN
                    </Text>
                    <Image source={require('../../assets/login.png')} style={style.image} />
                    <Text style={style.user}>
                        User
                    </Text>
                    <View style={style.wrapForm}>
                        <TextInput style={style.textInput} placeholderTextColor={'#fff'} placeholder={'Email..'} selectionColor={'#fff'} keyboardType={'email-address'} onChangeText={email => this.setState({ email })} />
                        <TextInput style={style.textInput} placeholderTextColor={'#fff'} placeholder={'Password..'} selectionColor={'#fff'} secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                        <View style={style.wrapButton}>
                            <TouchableOpacity onPress={() => this._handleLogin(data)} style={style.button}>
                                <Text style={style.buttonText}>
                                    Sign In
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.forgot}>
                                <Text style={style.forgotText}>
                                    Forgot Password ?
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={style.dont}>
                            Dont Have Account?
                        </Text>
                        <TouchableOpacity style={style.register} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={style.registerText}>
                                Register Here
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = state => {
    return {
        mitra: state.mitra.result,
        user: state.user.result
    };
};
export default connect(mapStateToProps)(Login)
const style = StyleSheet.create({
    body: {
        backgroundColor: '#6497B1',
        height: '100%',
        width: width,
    },
    container: {
        marginBottom: 50
    },
    signIn: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 36,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    user: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    image: {
        height: width * 0.3,
        width: width * 0.3,
        alignSelf: 'center'
    },
    wrapForm: {
        marginHorizontal: width * 0.1
    },
    textInput: {
        height: 45,
        backgroundColor: '#B3CDE0',
        paddingHorizontal: width * 0.05,
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#fff',
        marginBottom: 25
    },
    wrapButton: {
        flex: 2,
        flexDirection: "row",
    },
    button: {
        backgroundColor: '#005B96',
        height: 45,
        width: width * 0.30,
        alignSelf: 'flex-start',
        elevation: 5
    },
    buttonText: {
        height: '100%',
        textAlign: "center",
        textAlignVertical: "center",
        color: '#fff',
        fontSize: 18
    },
    forgot: {
        width: width * 0.45
    },
    forgotText: {
        height: '100%',
        textAlign: 'right',
        textAlignVertical: "center",
        alignSelf: "flex-end",
        color: '#fff'
    },
    dont: {
        marginTop: 50,
        textAlign: "center",
        fontSize: 15,
        color: '#fff'
    },
    register: {
        paddingVertical: 5
    },
    registerText: {
        textAlign: "center",
        fontSize: 15,
        color: '#fff'
    }
})
