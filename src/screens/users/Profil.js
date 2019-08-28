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
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { updateFoto } from '../../publics/redux/actions/user';
import Header from '../../components/HeaderUser';
import { ActivityIndicator } from 'react-native-paper';

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: '1',
          nameService: 'Service Ac',
          status: 'Sedang dijalan',
          date: '17-08-2019',
        },
        {
          id: '2',
          nameService: 'Service Ac',
          status: 'Sedang dijalan',
          date: '17-08-2019',
        },
        {
          id: '3',
          nameService: 'Service Ac',
          status: 'Sedang dijalan',
          date: '17-08-2019',
        },
        {
          id: '4',
          nameService: 'Service Ac',
          status: 'Sedang dijalan',
          date: '17-08-2019',
        },
        {
          id: '5',
          nameService: 'Service Ac',
          status: 'Sedang dijalan',
          date: '17-08-2019',
        },
        {
          id: '6',
          nameService: 'Service Ac',
          status: 'Sedang dijalan',
          date: '17-08-2019',
        },
      ],

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
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.headItem}>
              <Text>{item.nameService}</Text>
              <Text style={styles.txtRight}>{item.date}</Text>
            </View>
            <Text style={styles.txtIncome}>{item.status}</Text>
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
            <View style={{ alignItems: 'flex-end', marginLeft: '50%' }}>
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
          <View style={styles.centeritem}>

            <View style={{ alignItems: 'center', marginLeft: '5%' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 7 }}>
                Order Pending
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 7 }}>
                0
              </Text>
            </View>
            <View style={{ alignItems: 'center', marginLeft: '17%' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 7 }}>
                Order Selesai
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 7 }}>
                0
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
        <View
          style={{
            top: 120,
            marginHorizontal: 12,
            alignItems: 'center',
            justifyContent: 'center',
            height:300,
            marginBottom:5
          }}>
          <FlatList
            data={this.state.data}
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
    user: state.user
  }
}

export default connect(mapStateToProps)(Profil);

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#6497B1',
    height: '35%',
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
});
