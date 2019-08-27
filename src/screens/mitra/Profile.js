import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

class Profile extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.view1}>
                    <Image 
                      source={require('../../assets/images/Engineer_icon.png')}
                      style={styles.image}
                    />
                </View>
                <View style={styles.view2}>
                    <Text> disini isinya Info Profile </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view1: {
        flex: 1, 
        backgroundColor: '#6497B1'
    },
    view2: {
        flex: 1.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: 30,
        marginTop: 25
    }
})

export default Profile