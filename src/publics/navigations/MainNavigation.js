import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Login from '../../screens/auth/login'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole'
import HomeMitra from '../../screens/mitra/Home'
import HomeUser from '../../screens/users/Home'
import Category from '../../screens/users/CategorySub'
import Register from '../../screens/auth/register'
import ChatRoom from '../../screens/ChatRoom'
import ProfileMitra from '../../screens/mitra/Profile'
import DetailProfileMitra from '../../screens/users/DetailProfileMitra'
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
    ChatRoom: {
        screen: ChatRoom,
        // navigationOptions: {
        //     header: null
        // }
    },
    ProfileMitra: {
        screen: ProfileMitra,
        navigationOptions: {
            title: 'Profile'
        }
    },
    DetailProfileMitra: {
        screen: DetailProfileMitra,
        navigationOptions: {
            header: null
        }
    }
}, {
        initialRouteName: 'DetailProfileMitra'
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
    Auth:{
        screen:authNavigator,
    },
    App: {
        screen: stackNavigator
    }
})
export default createAppContainer(appNavigator)