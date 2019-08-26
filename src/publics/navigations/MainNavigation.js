
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Welcome from '../../screens/Welcome'
import ChooseRole from '../../screens/ChooseRole';
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
        initialRouteName: 'Welcome'
    })


export default createAppContainer(stackNavigator)