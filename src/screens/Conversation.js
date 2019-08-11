import Conversation from '../shared/templates/Conversation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../redux/chats/chatsActions';

const mapStateToProps = ({
    chats: {
        chats
    }
}) => ({
    chats
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
