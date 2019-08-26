import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole';
const stackNavigator = createStackNavigator({

    ChooseRole: {
        screen: ChooseRole,
        navigationOptions: {
            header: null
        }
    }
})

// const authNavigator = createStackNavigator({

// })

const appNavigator = createSwitchNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },
    // Loading,
    // Auth: {
    //     screen: authNavigator
    // },
    App: {
        screen: stackNavigator
    }
})

export default createAppContainer(appNavigator)