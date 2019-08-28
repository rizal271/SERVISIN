import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { getOrderUserSelesai } from '../../publics/redux/actions/orderUser';
import { updateFoto } from '../../publics/redux/actions/user';
import Header from '../../components/HeaderUser';
import { ActivityIndicator } from 'react-native-paper';

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderuser: [],
      isLoading: false,
      fullname: '',
      phone: '',
      email: '',
      image: null,
      imageSrc: null,
      lat: '',
      long: '',
      role: '',
      idUser: '',
      token: '',
      user: [],
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const fullname = await AsyncStorage.getItem('fullname')
    const phone = await AsyncStorage.getItem('nohp')
    const email = await AsyncStorage.getItem('email')
    const image = await AsyncStorage.getItem('image')
    const lat = await AsyncStorage.getItem('lat')
    const long = await AsyncStorage.getItem('long')
    const token = await AsyncStorage.getItem('token')
    const role = await AsyncStorage.getItem('role')
    const idUser = await AsyncStorage.getItem('idUser')
    this.setState({ fullname, phone, email, image, lat, long, token, role, idUser })
    await this.props.dispatch(getOrderUserSelesai(idUser));
    this.setState({
      orderuser: this.props.orderuser.orderuserList,
      isLoading: false
    });
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.headItem}>
              <Text>{item.subName}</Text>
              <Text style={styles.txtRight}>Rp.{item.price}</Text>
            </View>
            <Text style={styles.txtIncome}>Selesai</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _handleLogout = async () => {
    await AsyncStorage.clear()
    await AsyncStorage.setItem('welcome', 'udah')
    await this.props.navigation.navigate('AuthHome')
  }

  handleChoosePhoto = async () => {
    const options = {
      noData: true,
    }

    await ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        this.setState({ imageSrc: response })
      }
    })
  }

  updateImage = async () => {
    if (this.state.imageSrc !== null) {

      const formdata = new FormData()
      await formdata.append('image', {
        name: this.state.imageSrc.fileName,
        type: this.state.imageSrc.type || null,
        uri: this.state.imageSrc.uri
      })
      await this.props.dispatch(updateFoto(this.state.idUser, formdata))
        .then(() => {
          this.setState({
            user: this.props.user,
            imageSrc: formdata,
            image: formdata
          })
          this.props.navigation.navigate('AuthHome')
        })
    } else {
      alert('Silahkan pilih foto terlebih dahulu!')
    }
  }

  render() {
    console.log(this.props.orderuser.orderuserList);

    const { fullname, imageSrc, image, idUser, role, email, phone, token, lat, long } = this.state
    return (
      <Fragment>
        <Header />
        <View style={styles.top}>
          <View style={{ marginTop: 20, marginLeft: 20, elevation: 20 }}>
            <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
              {
                imageSrc &&
                (<Image
                  style={{ height: 85, width: 85, borderRadius: 100, elevation: 20 }}
                  source={{ uri: imageSrc.uri }}
                />) ||
                image &&
                (<Image
                  style={{ height: 85, width: 85, borderRadius: 100, elevation: 20 }}
                  source={{ uri: image }} />)
              }
            </TouchableOpacity>
          </View>
          <View style={styles.textTop}>
            <View>
              <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>
                {fullname}
              </Text>
              <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>
                {phone}
              </Text>
              <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>
                {email}
              </Text>
            </View>
            <View style={{ marginLeft: '50%', marginBottom: 20, }}>
              <TouchableOpacity onPress={() => this.updateImage()}>
                <Icon name="edit" style={{ fontSize: 30, color: '#fff', textAlign: 'center' }} />
                <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._handleLogout()}>
                <Icon name="sign-out" style={{ fontSize: 30, color: 'salmon', textAlign: 'center' }} />
                <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>History Services</Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FlatList
              data={this.state.orderuser}
              renderItem={this._renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderuser: state.orderuser
  }
}

export default connect(mapStateToProps)(Profil);

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#6497B1',
    height: '40%',
    marginBottom: 45
  },
  textTop: {
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '8%',
  },
  centeritem: {
    height: '40%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 10,
    marginTop: '2%',
    flexDirection: 'row',
  },
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
});
