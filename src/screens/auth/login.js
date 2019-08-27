import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export default class login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
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
                        <TextInput style={style.textInput} placeholderTextColor={'#fff'} placeholder={'Email..'} selectionColor={'#fff'} keyboardType={'email-address'} />
                        <TextInput style={style.textInput} placeholderTextColor={'#fff'} placeholder={'Password..'} selectionColor={'#fff'} secureTextEntry={true} />
                        <View style={style.wrapButton}>
                            <TouchableOpacity style={style.button}>
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
