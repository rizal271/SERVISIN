import React, { Component } from 'react'
import { Dimensions, Text, View, FlatList, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import Slider from '../../components/Slider';
import Header from '../../components/HeaderUser';

class HomeUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { 'id': '01', 'category': 'Otomotif', 'image': 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566791479/icon/oto_wdxv7a.png' },
                { 'id': '02', 'category': 'Elektronik', 'image': 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566791479/icon/elek_xzpwms.png' },
                { 'id': '03', 'category': 'Builders', 'image': 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566791479/icon/build_kbl4tu.png' },
                { 'id': '04', 'category': 'Emergency', 'image': 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1566791479/icon/emer_vdxvvb.png' },
            ],
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Header />
                <View style={styles.imageCon}>
                    <Slider />
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Services Here</Text>
                </View>
                <FlatList
                    style={styles.FlatList}
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                                <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => { this.props.navigation.navigate('Category', item.category) }}>
                                    <Image style={styles.image} source={{ uri: `${item.image}` }} />
                                    <Text style={styles.text}>{item.category}</Text>
                                </TouchableOpacity>
                        )
                    }} />
            </View>
        )
    }
}

export default HomeUser;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005b96',
        paddingTop: 6,
        paddingBottom: 4,
        elevation: 6,
    },
    textTitle: {
        marginBottom: 5,
        color: 'white',
        fontSize: 15,
        fontWeight: '700'
    },
    image: {
        alignSelf: 'center',
        marginVertical: 10,
        width: '80%',
        height: 70,
    },
    item: {
        flex: 1,
    },
    FlatList: {
        width: Dimensions.get('screen').width,
        marginTop: 10,
        paddingHorizontal:20,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
        fontWeight: '400'
    },
    button: {
        marginLeft:15,
        marginVertical: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#6497b1',
        borderRadius: 8,
        elevation: 6,
        width: '42%',
        height: 120,
    },
});
