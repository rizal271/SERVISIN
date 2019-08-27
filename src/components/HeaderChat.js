import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions, Image } from 'react-native'
import { withNavigation } from 'react-navigation';

class Header extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={1} style={styles.container}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{ uri: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566321024/img/blank-profile-picture-973460_960_720_wolhdp.png' }} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.textName}>this.props.name</Text>
                    <Text style={styles.textStatus}>this.props.status</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Header)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#005b96',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop:10,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        height:'15%'
    },
     item: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    content: {
        flex: 5,
        paddingLeft: 5,
        justifyContent: 'center',
    },
    textName: {
        fontSize: 18,
        color: "white"
    },
    textStatus: {
        fontSize: 14,
        color: "white"
    }
});