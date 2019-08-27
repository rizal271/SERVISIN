import React, { Component, Fragment } from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import { Button } from 'native-base';

class HomeMitra extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PersonChat')}>
            <IconMaterial name="arrow-back" style={styles.iconnavbar} />
          </TouchableOpacity>
          <Text style={styles.textnavbar}>Home Mitra</Text>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="history" style={styles.iconnavbar} />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.noOrder}>
          <Image
            style={{height: 140, width: 140}}
            source={require('../../assets/images/plumber-35611_960_720.png')}
          />
          <Text style={styles.textnoOrder}>Berdo'a dan Bersabarlah</Text>
          <Text style={styles.textnoOrder}>Yakin ada Orderan Masuk</Text>
        </View> */}
        <View>
          <FlatList
            data={[{ key: 'a' }, { key: 'b' }]}
            // renderItem={({item}) => <Text>{item.key}</Text>}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PersonChat')}>
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
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 17,
                          fontWeight: 'bold',
                        }}>

                        Servis AC di Jakal No. 52
                      </Text>
                      <Text style={{ color: 'black' }}>
                        Di Jalan
                      </Text>
                      <Text style={{ color: 'black' }}>
                        26 Agust 2019 . 13.30 WIB
                      </Text>
                    </View>
                    <View
                      style={{ borderBottomWidth: 3, borderColor: 'black' }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
            style={styles.flatlist}
          />

          <Button primary onPress={async () => {
            await AsyncStorage.clear()
            await AsyncStorage.setItem('welcome', 'udah')
            await this.props.navigation.navigate('AuthHome')
          }}><Text>Logout</Text></Button>
        </View>
      </Fragment>
    );
  }
}
export default HomeMitra;
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
