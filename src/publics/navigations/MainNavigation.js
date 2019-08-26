import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Login from "../../screens/auth/login";
import Welcome from "../../screens/Welcome";
import ChooseRole from "../../screens/ChooseRole";
import HomeMitra from "../../screens/mitra/Home";
import HomeUser from "../../screens/users/Home";
import ProfilUser from "../../screens/users/Profil";
import Category from "../../screens/users/CategorySub";
import DetailOrder from "../../screens/users/DetailOrder";
import Icon from "react-native-vector-icons/FontAwesome";
// const stackNavigator = createStackNavigator({

//     ChooseRole: {
//         screen: ChooseRole,
//         navigationOptions: {
//             header: null
//         }
//     },
//     HomeMitra: {
//         screen: HomeMitra,
//         navigationOptions: {
//             header: null
//         }
//     },
//   HomeUser: {
//         screen: HomeUser,
//         navigationOptions: {
//             header: null
//         }
//     },
//   Category: {
//         screen: Category,
//         navigationOptions: {
//             header: null
//         }
//     }
// }, {
//         initialRouteName: 'HomeMitra'
//     })

const stackNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeMitra,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={20} color={focused ? "#FFF" : "#DACE91"} />
        )
      },
      Maps: {
        screen: HomeMitra,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon name="map" size={20} color={focused ? "#FFF" : "#DACE91"} />
          )
        }
      },
      Profil: {
        screen: ProfilUser,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={20} color={focused ? "#FFF" : "#DACE91"} />
          )
        }
      }
    }
  },
  {
    initialRouteName: "Profil",
    activeColor: "#f0edf6",
    inactiveColor: "#b3cde0",
    barStyle: { backgroundColor: "#005b96" }
  }
);
const authNavigator = createStackNavigator({
  Login
});

const appNavigator = createSwitchNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  Auth: {
    screen: authNavigator
  },
  App: {
    screen: stackNavigator
  }
});
export default createAppContainer(appNavigator);
