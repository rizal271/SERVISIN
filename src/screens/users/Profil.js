import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    };
  }

  _renderItem = ({item}) => {
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
  render() {
    return (
      <Fragment>
        <View style={styles.top}>
          <View style={{marginTop: 20, marginLeft: 20, elevation: 20}}>
            <Image
              style={{height: 85, width: 85, borderRadius: 100, elevation: 20}}
              source={require('../../assets/images/plumber-35611_960_720.png')}
            />
          </View>
          <View style={styles.textTop}>
            <View>
              <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
                nama
              </Text>
              <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
                0832637236
              </Text>
              <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
                Jakal Selatan
              </Text>
            </View>
            <View style={{alignItems: 'flex-end', marginLeft: '50%'}}>
              <TouchableOpacity>
                <Icon name="edit" style={{fontSize: 40, color: '#fff'}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.centeritem}>
            <View style={{alignItems: 'center', marginLeft: '5%'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', padding: 7}}>
                Order Pending
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', padding: 7}}>
                0
              </Text>
            </View>
            <View style={{alignItems: 'center', marginLeft: '17%'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', padding: 7}}>
                Order Selesai
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', padding: 7}}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            top: 120,
            marginHorizontal: 12,
            margin: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </Fragment>
    );
  }
}
export default Profil;

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
