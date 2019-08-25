import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation'
import Login from '../../screens/auth/login'
// const stackNavigator = createStackNavigator({

// })

const authNavigator = createStackNavigator({
    Login
})

const appNavigator = createSwitchNavigator({
    Auth:{
        screen:authNavigator,
    },
},{initialRouteName:'Auth'})

export default createAppContainer(appNavigator)