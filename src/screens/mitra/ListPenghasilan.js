import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'

export class ListPenghasilan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    id: '1',
                    nameService: 'Service Ac',
                    income: 250000,
                    date: '17-08-2019'
                },
                {
                    id: '2',
                    nameService: 'Service Ac',
                    income: 250000,
                    date: '17-08-2019'
                },
                {
                    id: '3',
                    nameService: 'Service Ac',
                    income: 250000,
                    date: '17-08-2019'
                },
                {
                    id: '4',
                    nameService: 'Service Ac',
                    income: 250000,
                    date: '17-08-2019'
                },
                {
                    id: '5',
                    nameService: 'Service Ac',
                    income: 250000,
                    date: '17-08-2019'
                },
                {
                    id: '6',
                    nameService: 'Service Ac',
                    income: 250000,
                    date: '17-08-2019'
                }
            ]
        }
    }

    _renderItem = ({ item }) => {
        return (<TouchableOpacity>
            <View style={styles.list}>
                <View style={styles.listItem}>
                    <View style={styles.headItem}>
                        <Text>{item.nameService}</Text>
                        <Text style={styles.txtRight}>{item.date}</Text>
                    </View>
                    <Text style={styles.txtIncome}>Rp. {item.income}</Text>
                </View>
            </View>
        </TouchableOpacity>)
    }
    render() {
        console.warn('data: ', this.state.data)
        return (
            <View>
                <View style={styles.appbar}>
                    <StatusBar translucent barStyle='dark-content' backgroundColor="transparent" />
                    <Text style={styles.titleBar}>Penghasilan </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.txtTitle}>List Penghasilan</Text>
                    <Text style={styles.txtSubtitle}>Total: {this.state.data.reduce((total, value) => total + value.income, 0)}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={[styles.container, { marginTop: 70 }]}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.id}
                        style={styles.flatList}
                    />
                </View>
            </View>
        )
    }
}

export default ListPenghasilan

const styles = StyleSheet.create({
    txtIncome: {
        color: '#70FF00'
    },
    txtRight: {
        flex: 1,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    headItem: {
        flexDirection: 'row'
    },
    listItem: {
        flexDirection: 'column',
        width: 288,
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#c4c4c4'
    },
    list: {
        flexDirection: 'row',
    },
    txtSubtitle: {
        fontSize: 14,
        textAlign: 'left',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    txtTitle: {
        fontSize: 18
    },
    line: {
        position: 'absolute',
        top: 170,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        height: 0.1,
        width: '80%',
        flex: 1,
        alignSelf: 'center',
    },
    container: {
        position: 'absolute',
        top: 120,
        marginHorizontal: 35,
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleBar: {
        padding: 35,
        marginHorizontal: 30,
        textTransform: 'capitalize',
        fontSize: 18
    },
    appbar: {
        position: 'absolute',
        top: 0,
        elevation: 10,
        backgroundColor: '#ffffff',
        width: '100%',
        height: 80
    }
})