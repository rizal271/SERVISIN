import React, { Component } from 'react'
import { Dimensions, Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'

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
                <View style={styles.title}>
                    <Text>{this.state.category}</Text>
                </View>
                <FlatList
                    style={styles.FlatList}
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.button}>
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
        backgroundColor: 'white',
        paddingVertical: 20
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
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 7,
        borderRadius: 8,
        elevation: 6,
        width: 145,
        height: 180,
    },
});
