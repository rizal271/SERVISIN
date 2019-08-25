import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeUser from '../../screens/users/Home';
import Category from '../../screens/users/CategorySub';

const stackNavigator = createStackNavigator({
    HomeUser,
    Category
})


const appNavigator = createSwitchNavigator({
    App: {
        screen: stackNavigator
    },
}
    ,
    {
        initialRouteName: 'App'
        // initialRouteName: 'login'
    })

export default createAppContainer(appNavigator)