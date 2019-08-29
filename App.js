import React, { Component } from 'react';
import MainNavigation from './src/publics/navigations/MainNavigation';
import store from './src/publics/redux/store';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import Sound from "react-native-sound";
import IDPonsel from './src/publics/store/IDPonsel';
export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init('d92c3fc2-9bf7-42bc-ba41-8f9587d65de6');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    // OneSignal.addEventListener('NotificationOpened', this.onNotificationOpened);
    OneSignal.configure();
    this.state = {
      loading: true
    }
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
    const audio = new Sound("notif.mp3", Sound.MAIN_BUNDLE, err => {
      if (err) {
        return;
      } else {
        audio.play(() => audio.release());
      }
    });
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }


  trigerr = () => {
    this.setState({ loading: false });
  }

  onIds(device) {
    console.log('rizal ganteng', device)
    IDPonsel.IDPonsel = device.userId;
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>

    )
  }
}
