import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation'
import HomeMitra from '../../screens/mitra/Home'

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