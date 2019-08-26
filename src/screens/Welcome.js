import React, { Component } from 'react'
import { Platform, StyleSheet, StatusBar} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {

      show_Main_App: false

    };
  }
  on_Done_all_slides = () => {
    this.setState({ show_Main_App: true });
  };

  on_Skip_slides = () => {
    this.setState({ show_Main_App: true });
  }

  render() {
    if (this.state.show_Main_App) {
      this.props.navigation.navigate('Auth')
    }
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          showSkipButton={true}
          onSkip={this.on_Skip_slides}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});

const slides = [
  {
    key: 'k1',
    title: 'Servis Elektronik',
    text: 'Butuh teknisi elektronik? kamu bisa cari di sini!',
    image: require('../assets/images/service-komputer.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#011f4b',
  },
  {
    key: 'k2',
    title: 'Servis Kendaraan',
    text: 'Butuh teknisi kendaraan? kamu bisa cari di sini!',
    image: require('../assets/images/plumber-35611_960_720.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#03396c',
  },
  {
    key: 'k3',
    title: 'Servis Darurat!',
    text: 'Semua servis ada dalam satu genggaman!',
    image: require('../assets/images/1.png'),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#6497b1',
  }
];
export default Welcome
