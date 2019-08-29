import React, { Component } from 'react';
import MainNavigation from './src/publics/navigations/MainNavigation';
import store from './src/publics/redux/store';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("d92c3fc2-9bf7-42bc-ba41-8f9587d65de6");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>

    )
  }
}
