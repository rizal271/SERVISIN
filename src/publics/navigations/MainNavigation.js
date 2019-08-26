import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from '../../screens/auth/login'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole';
import ListPenghasilan from '../../screens/mitra/ListPenghasilan';

const stackNavigator = createStackNavigator({
    ListPenghasilan: {
        screen: ListPenghasilan,
        navigationOptions: {
            header: null
        }
    }

}, {
        initialRouteName: 'ListPenghasilan'
    })

const authNavigator = createStackNavigator({
    ChooseRole: {
        screen: ChooseRole,
        navigationOptions: {
            header: null
        }
    },
    Login
})

// const appNavigator = createSwitchNavigator({
//     Welcome: {
//         screen: Welcome,
//         navigationOptions: {
//             header: null
//         }
//     },
//     Auth: {
//         screen: authNavigator,
//     },
//     App: {
//         screen: stackNavigator
//     }
// })

export default createAppContainer(stackNavigator)