import { createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole'
import HomeMitra from '../../screens/mitra/Home'
const stackNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },
    ChooseRole: {
        screen: ChooseRole,
        navigationOptions: {
            header: null
        }
    },
    HomeMitra: {
        screen: HomeMitra,
        navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'HomeMitra'
    })
    

// const authNavigator = createStackNavigator({

// })

// const appNavigator = createSwitchNavigator({
//     Loading,
//     Auth: {
//         screen: authNavigator
//     },
//     App: {
//         screen: stackNavigator
//     }
// })

export default createAppContainer( stackNavigator)