import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import AuthHome from '../../screens/AuthHome';
import Login from '../../screens/auth/Login';
import Welcome from '../../screens/Welcome';
import ChooseRole from '../../screens/ChooseRole';
import HomeMitra from '../../screens/mitra/Home';
import HomeUser from '../../screens/users/Home';
import MapsUser from '../../screens/users/MapSub';
import Category from '../../screens/users/CategorySub';
import HistoryOrder from '../../screens/users/HistoryOrder';
import Register from '../../screens/auth/Register'
import DetailOrder from '../../screens/users/DetailOrder'
import ChatRoom from '../../screens/ChatRoom'
import ProfileMitra from '../../screens/mitra/Profile'
import DetailOrderMitra from '../../screens/mitra/detailOrder';
import DetailProfileMitra from '../../screens/users/DetailProfileMitra'
import { Icon } from 'native-base';
import Profil from "../../screens/users/Profil";
import ListPenghasilan from "../../screens/mitra/ListPenghasilan";
import OrderList from "../../screens/mitra/OrderList";
import MapsMitra from '../../screens/mitra/MapsMitra';
import Maps from '../../screens/Maps';


const UserTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeUser,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />

        ),
      },
    },
    Maps: {
      screen: Maps,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: Profil,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={24} />

        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#b3cde0',
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 9,
        marginTop: 1,
      },
      style: {
        backgroundColor: '#005b96',
        elevation: 15,
        height: 50,
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
    },
  },
);

const MitraTabNavigator = createMaterialTopTabNavigator(
  {
    Maps: {
      screen: MapsMitra,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: ProfileMitra,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#b3cde0',
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 9,
        marginTop: 1,
      },
      style: {
        backgroundColor: '#005b96',
        elevation: 15,
        height: 50,
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
    },
  },
);

const AppStackNavigator = createStackNavigator(
  {
    Homeuser: UserTabNavigator,
    Homemitra: MitraTabNavigator,
    Category,
    MapsUser,
    HistoryOrder,
    DetailProfileMitra,
    ChatRoom,
    DetailOrder,
    DetailOrderMitra,
    ListPenghasilan,
    OrderList
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator({
  ChooseRole,
  Login,
  Register
},
  { headerMode: 'none' })

const Apps = createSwitchNavigator({
  Welcome,
  AuthHome,
  AuthStack,
  AppStackNavigator
}, {
    initialRouteName: 'AuthHome',
  })

export default createAppContainer(Apps);