import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Welcome from '../../screens/Welcome'
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
    }
}, {
        initialRouteName: 'ChooseRole'
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

export default createAppContainer(stackNavigator)