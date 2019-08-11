import ContactDetails from '../shared/templates/ContactDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createChat } from '../redux/chats/chatsActions';

const mapStateToProps = ({
    chats: {
        chats
    }
}) => ({
    chats
});

const mapDispatchToProps = dispatch => bindActionCreators({
    createChat
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
