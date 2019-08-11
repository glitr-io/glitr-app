import ConversationSettings from '../shared/templates/ConversationSettings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    updateGroupName,
    updateGroupIcon,
    addAdmin,
    removeAdmin,
    addUsers,
    removeUser,
    exitChat,
    deleteChat
} from '../redux/chats/chatsActions';

const mapStateToProps = ({
    chats: {
        chats
    },
    contacts: {
        contacts
    },
    account: {
        accountId
    }
}) => ({
    chats,
    contacts,
    accountId
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateGroupName,
    updateGroupIcon,
    addAdmin,
    removeAdmin,
    addUsers,
    removeUser,
    exitChat,
    deleteChat
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConversationSettings);
