import AppLoading from '../shared/templates/AppLoading';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = ({
    account: {
        loggedIn
    }
}) => ({
    loggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppLoading);
