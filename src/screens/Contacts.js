import Contacts from '../shared/templates/Contacts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllContacts, addNewContacts } from '../redux/contacts/contactsActions';

const mapStateToProps = ({
    contacts: {
        contacts
    }
}) => ({
    contacts
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllContacts,
    addNewContacts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
