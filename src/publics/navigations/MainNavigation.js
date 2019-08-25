import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation'

const stackNavigator = createStackNavigator({

})

const authNavigator = createStackNavigator({

})

const appNavigator = createSwitchNavigator({
    Loading,
    Auth:{
        screen:authNavigator
    },
    App:{
        screen:stackNavigator
    }
})

export default createAppContainer(appNavigator)