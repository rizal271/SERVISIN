import React, { Component } from 'react';
import {
    Dimensions,
    StatusBar,
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import Header from '../../components/HeaderUser';
import { withNavigation } from 'react-navigation';

class HistoryOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { 'id': '01', 'order': 'Service Ac', 'price': '100.000', 'date': '02-08-2019' },
                { 'id': '02', 'order': 'Service Motor', 'price': '50.000', 'date': '05-08-2019' },
                { 'id': '03', 'order': 'Kehilangan Kunci', 'price': '50.000', 'date': '10-08-2019' },
                { 'id': '04', 'order': 'Perbaiki Atap', 'price': '200.000', 'date': '12-08-2019' },
            ],
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <Header />
                <View style={styles.title}>
                    <Text style={styles.textTitle}>History Services</Text>
                </View>
                <FlatList
                    style={styles.FlatList}
                    data={this.state.data}
                    numColumns={1}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.button} activeOpacity={1}>
                                <View style={styles.item}>
                                    <Text>{item.order}</Text>
                                    <Text>Rp.{item.price}</Text>
                                </View>
                                <View style={styles.content}>
                                    <Text style={styles.textDate}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}
export default withNavigation(HistoryOrder)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    button: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        marginHorizontal: 20,
        marginVertical: 4,

    },
    content: {
        flex: 5,
    },
    textDate: {
        fontSize: 12,
        paddingHorizontal: 4,
        paddingVertical: 4,
        textAlign: 'right'
    },
    FlatList: {
        marginTop: 10
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
        fontSize: 16,
        fontWeight: '700'
    },
});