import Login from '../shared/templates/Login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    register,
    loginWithPassword,
    updateLoginForm
} from '../redux/account/accountActions';

const mapStateToProps = ({
    account: {
        loggedIn,
        loginForm: {
            email,
            password,
            confirmPassword
        }
    }
}) => ({
    loggedIn,
    loginForm: {
        email,
        password,
        confirmPassword
    }
});

const mapDispatchToProps = dispatch => bindActionCreators({
    register,
    loginWithPassword,
    updateLoginForm
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
