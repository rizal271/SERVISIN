import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/HeaderUser';


class HomeMitra extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <View>
          <FlatList
            data={[{ key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DetailOrderMitra')}>
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
