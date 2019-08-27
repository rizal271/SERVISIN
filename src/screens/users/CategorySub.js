import React, { Component } from 'react'
import { Dimensions, Text, View, FlatList, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import Slider from '../../components/Slider';
import Header from '../../components/HeaderUser';

class SubCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category:this.props.navigation.state.params,
            data:[
                {'sub':'sub1'},
                {'sub':'sub2'},
            ]
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
                    <Text style={styles.textTitle}>this.state.category</Text>
                </View>
                <FlatList
                    style={styles.FlatList}
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('MapsUser') }}>
                                    <Text style={styles.text}>CEK</Text>
                            </TouchableOpacity>
                        )
                    }} />
                    <TouchableOpacity style={styles.order} onPress={() => { this.props.navigation.navigate('HistoryOrder') }}>
                    <Text style={styles.buttonText}>History Services</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SubCategory;
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
    item: {
        flex: 1,
    },
    FlatList:{
        width: Dimensions.get('screen').width,
        marginTop: 10,
        marginBottom:8,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    text:{
        textAlign:'center',
        color:'white'
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
    image: {
        alignSelf: 'center',
        marginVertical: 10,
        width: '80%',
        height: 70,
    },
    order:{
        alignSelf: 'center',
        backgroundColor: '#005b96',
        paddingVertical: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        width: Dimensions.get('screen').width * 0.85
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    },
});
