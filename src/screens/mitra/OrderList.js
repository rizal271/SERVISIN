import React, { Component } from 'react'
import { FlatList, Image, TouchableOpacity, View, Fragment, StyleSheet } from 'react-native'
import { Header, Text, Card, CardItem, Badge } from 'native-base'
import { connect } from 'react-redux'
import { getOrderMitraSelesai } from '../../publics/redux/actions/order'
import moment from 'moment'

class OrderList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            idmitra: this.props.navigation.getParam('idmitra')
        }
    }

    componentDidMount = async () => {
        console.warn(this.state.idmitra)
        await this.getOrderSelesai()
    }

    getOrderSelesai() {
        this.props.dispatch(getOrderMitraSelesai(this.state.idmitra))
            .then((response) => {
                console.warn(response)
                this.setState({ data: this.props.order.orderList })
            })
    }

    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginBottom: 10,
                }}>
                <View>
                    <Image
                        style={{ height: 60, width: 60, borderRadius: 50 }}
                        source={require('../../assets/images/plumber-35611_960_720.png')}
                    />
                </View>
                <View style={{ marginLeft: 10, width: 270 }}>
                    <Text>
                        {moment(item.tglOrder).format('DD-MM-YYYY')}
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginBottom: 10
                        }}>

                        {item.catName + '\n' + '(' + item.subName + ')'}
                    </Text>
                    <Badge success><Text>{item.status}</Text></Badge>
                    <Text style={{ color: '#4dad4a' }}>
                        Rp.{item.price}
                    </Text>
                </View>
                <View
                    style={{ borderBottomWidth: 3, borderColor: 'black' }}
                />
            </View>
        );
    }

    render() {
        console.warn('data order: ', this.state.data);

        return (
            <>
                <Header />
                {
                    this.state.data && this.state.data.length > 0
                        ?
                        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                            <Card>
                                <CardItem>
                                    <FlatList
                                        data={this.state.data}
                                        renderItem={this._renderItem}
                                        style={styles.flatlist}
                                    />
                                </CardItem>
                            </Card>
                        </View>
                        :
                        <View style={{
                            flex: 1,
                            margin: 0,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>Belum ada orderan, yang sabar yah ;(</Text>
                        </View>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(OrderList)
const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        elevation: 5,
        shadowColor: '#111',
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        top: 0,
        left: '0%',
        width: '100%',
        height: 56,
    },
    textnavbar: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: '2%',
        // marginLeft: '%'
    },
    iconnavbar: {
        fontSize: 20,
        fontWeight: 'bold',
        // marginLeft: '12%',
        padding: 12,
    },
    noOrder: {
        //   flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50%'
    },
    textnoOrder: {
        fontSize: 24,
    },
    flatlist: {
        paddingVertical: 10,
    },
});