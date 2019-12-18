import ForgotPassword from '../shared/templates/ForgotPassword';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    forgotPassword,
    updateLoginForm
} from '../redux/account/accountActions';

const mapStateToProps = ({
    account: {
        loginForm: {
            email
        }
    }
}) => ({
    loginForm: {
        email
    }
});

const mapDispatchToProps = dispatch => bindActionCreators({
    forgotPassword,
    updateLoginForm
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
