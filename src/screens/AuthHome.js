import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage
} from 'react-native'
export default class Auth extends Component {
    state = {
        role: 'user'
    }
    componentWillMount = () => {
        this.props.navigation.navigate(this.state.role == 'user' ? 'Homeuser' : 'HomeMitra')
    }
    render() {
        return (
            <ActivityIndicator size='large' color='blue' />
        )
    }
}