import React, { Component } from 'react'
import { Dimensions, Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '../../components/Slider';

class HomeUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { 'id': '01', 'category': 'Otomotif' },
                { 'id': '02', 'category': 'Elektronik' },
                { 'id': '03', 'category': 'Builders' },
                { 'id': '04', 'category': 'Emergency' },
            ],
        }
    }
    render() {
        return (
            <View style={styles.container}>
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
                        console.log(item)
                        return (
                            <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => { this.props.navigation.navigate('Category', item.category) }}>
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
        backgroundColor: '#b3cde0',
        paddingTop: 8,
        elevation: 6,
    },
    textTitle: {
        marginBottom:5,
        color:'white',
        fontSize:15,
        fontWeight:'700'
    },
    imageCon: {
    },
    item: {
        flex: 1,
    },
    FlatList: {
        width: Dimensions.get('screen').width,
        marginTop: 10,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 5,
        fontWeight:'400'
    },
    button: {
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#6497b1',
        borderRadius: 8,
        elevation: 6,
        width: '42%',
        height: 120,
    },
});
