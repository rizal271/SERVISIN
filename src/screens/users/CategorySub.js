import React, { Component } from 'react'
import { Dimensions, Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
                <Header />
                <View style={styles.imageCon}>
                    <Slider />
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>{this.state.category}</Text>
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
        alignSelf:'center'
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
});
