import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from '../../screens/auth/login'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole'
import HomeMitra from '../../screens/mitra/Home'
import HomeUser from '../../screens/users/Home';
import Category from '../../screens/users/CategorySub';
import Register from '../../screens/auth/register'
import DetailOrder from '../../screens/users/DetailOrder'
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
    },
    DetailOrder:{
        screen:DetailOrder
    }
}, {
        initialRouteName: 'DetailOrder'
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
    ChooseRole: {
        screen: ChooseRole,
        navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'Welcome'
    })


export default createAppContainer(stackNavigator)
