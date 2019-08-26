import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation'

import Register from '../../screens/auth/register'

// const stackNavigator = createStackNavigator({

// })

const authNavigator = createStackNavigator({
    register: Register
})

const appNavigator = createSwitchNavigator({
    Auth:authNavigator,
    // App:stackNavigator
    
}, {
    initialRouteName: 'Auth'
})

export default createAppContainer(appNavigator)