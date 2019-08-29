import React, { Component } from 'react';
import MainNavigation from './src/publics/navigations/MainNavigation';
import store from './src/publics/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>

    )
  }
}
