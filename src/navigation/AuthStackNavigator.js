import {
    createStackNavigator,
} from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

const AuthStack = createStackNavigator({
    Login,
    Register,
    ForgotPassword
}, {
    headerMode: 'none',
    initialRouteName: 'Login',
});

export default AuthStack;
