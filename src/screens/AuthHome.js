import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage
} from 'react-native'
export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            role: '',
            welcome: null,
        }
    }
    componentWillMount = async () => {
        await AsyncStorage.getItem('welcome', (err, result) => {
            if (result) {
                this.setState({
                    welcome: result
                })
            }
        })
        if (this.state.welcome !== null) {
            await AsyncStorage.getItem('role', (err, result) => {
                if (result) {
                    this.setState({
                        role: result
                    })
                }
            })
            if (this.state.role === 'mitra') {
                this.props.navigation.navigate('Homemitra')
            } else if (this.state.role === 'user') {
                this.props.navigation.navigate('Homeuser')
            } else {
                this.props.navigation.navigate('ChooseRole')
            }
        } else {
            this.props.navigation.navigate('Welcome')
        }
    }
    render() {
        console.warn(this.state.welcome);
        console.warn('roleee ', this.state.role)
        return (
            <ActivityIndicator size='large' color='blue' />
        )
    }
}