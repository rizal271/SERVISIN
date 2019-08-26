import React, { Component } from 'react'
import { Text, View} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center',paddingTop:10, paddingLeft:10, alignContent:'center', alignItems:'center', backgroundColor: '#005b96', flexDirection: 'row', justifyContent: 'space-between', height:'10%' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>ServisinApp</Text>
            </View>
        )
    }
}

export default Header