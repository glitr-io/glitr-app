import Profile from '../shared/templates/Profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import {
    changeDisplayName,
    changeDisplayIcon,
    logout
} from '../redux/account/accountActions'

const mapStateToProps = ({
    account : {
        displayName,
        displayIcon
    }
}) => ({
    displayName,
    displayIcon
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeDisplayName,
    changeDisplayIcon,
    logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
