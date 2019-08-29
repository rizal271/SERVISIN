import React, { Component } from 'react'
import { ScrollView, FlatList, Image, TouchableOpacity, View, Fragment, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import { Text, Card, CardItem, Badge } from 'native-base'
import { connect } from 'react-redux'
import { getOrderMitraSelesai } from '../../publics/redux/actions/order'
import moment from 'moment';
import Header from '../../components/HeaderUser';

class OrderList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            data: [],
            idmitra: this.props.navigation.getParam('idmitra')
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await this.getOrderSelesai()
    }

    getOrderSelesai() {
        this.props.dispatch(getOrderMitraSelesai(this.state.idmitra))
            .then((response) => {
                console.warn(response)
                this.setState({ data: this.props.order.orderList, isLoading: false })
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
                    <Badge success><Text>Selesai</Text></Badge>
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
        return (
            <>
                <Header />
                <ScrollView>
                {
                    this.state.isLoading == true
                        ?
                        <ActivityIndicator size={"large"} color={'#005b96'} height={Dimensions.get('screen').height} paddingTop={Dimensions.get('screen').height * 0.5} style={{ alignSelf: 'center', width: Dimensions.get('screen').width }} />
                        :
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
                </ScrollView>
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