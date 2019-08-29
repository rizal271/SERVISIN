import React, { Component } from 'react';
import {
    Dimensions,
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import { Database, Auth } from '../../publics/firebase/config';
import Header from '../../components/HeaderUser';
import { connect } from 'react-redux';
import { getAllUser } from '../../publics/redux/actions/user';
import { withNavigation } from 'react-navigation';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            user: [],
            data: [],
            uid: null,
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        const uid = await AsyncStorage.getItem('idmitra')
        this.setState({ uid });
        Database.ref('messages/' + this.state.uid).on('child_added', (data) => {
            let person = data.val();
            person.id = data.key;
            this.state.chat.push({
                id: person.id
            })
            this.setState({ chat: this.state.chat })
        })
        await this.props.dispatch(getAllUser());
        this.setState({
            isLoading: false,
            user: this.props.user.userList.result
        });
    }
    render() {
        const user = this.state.user;
        const chat = this.state.chat;
        const data = []
        chat.forEach((items, key) => {
            data[key] = user.find((item) => item.idUser === items.id)
        })
        console.warn(data);

        return (
            <>
                <StatusBar translucent backgroundColor="transparent" />
                <Header />
                {this.state.isLoading == true ? <ActivityIndicator size={"large"} /> :
                    <View>
                        <FlatList
                            data={data && data}
                            keyExtractor={item => item && item.idUser}
                            numColumns={1}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => {
                                        this.props.navigation.navigate('ChatRoom', {
                                            uid: item && item.idUser, name: item && item.fullname, image: item && item.image, idphone: item && item.IDponselUser
                                        })
                                    }}>
                                        <View style={styles.item}>
                                            <Image style={styles.image} source={{ uri: `${item && item.image}` }} />
                                        </View>
                                        <View style={styles.content}>
                                            <Text style={styles.textName}>{item && item.fullname}</Text>
                                            <Text style={styles.textStatus}>{item && item.idUser}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>}
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withNavigation(ChatList));
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'white'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoSplash: {
        width: 200,
        height: 200,
    },
    title: {
        color: '#FFF',
        opacity: 0.8,
        fontSize: 18
    },
    button: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        margin: 4,
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
    },
    textName: {
        fontSize: 18,
        color: "#1c1c1c"
    },
    textStatus: {
        fontSize: 14,
        color: "#1c1c1c"
    }
});