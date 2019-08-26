import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from '../../screens/auth/login'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole'
import HomeMitra from '../../screens/mitra/Home'
import HomeUser from '../../screens/users/Home';
import MapsUser from '../../screens/users/MapSub';
import Category from '../../screens/users/CategorySub';
import Register from '../../screens/auth/register'
const stackNavigator = createStackNavigator({

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
    },
    HomeUser: {
        screen: HomeUser,
        navigationOptions: {
            header: null
        }
    },
    Category: {
        screen: Category, 
        navigationOptions: {
            header: null
        }
    }
    ,
    MapsUser: {
        screen: MapsUser,
        navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'HomeUser'
    })


const authNavigator = createStackNavigator({
    Login,
    Register
})

const appNavigator = createSwitchNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },
    Auth: {
        screen: authNavigator,
    },
    App: {
        screen: stackNavigator
    }
})
export default createAppContainer(appNavigator)