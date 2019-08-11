// import store from '../store';
import { Contacts, Permissions, Alert } from 'expo';

export const CONTACTS_GET_ALL_CONTACTS = 'CONTACTS_GET_ALL_CONTACTS';
export const CONTACTS_ADD_NEW_CONTACTS = 'CONTACTS_ADD_NEW_CONTACTS';
export const CONTACTS_ADD_NEW_CONTACTS_REQUEST = 'CONTACTS_ADD_NEW_CONTACTS_REQUEST';
export const CONTACTS_ADD_NEW_CONTACTS_SUCCESS = 'CONTACTS_ADD_NEW_CONTACTS_SUCCESS';
export const CONTACTS_ADD_NEW_CONTACTS_FAILURE = 'CONTACTS_ADD_NEW_CONTACTS_FAILURE';

export const getAllContacts = () => ({
    type: CONTACTS_GET_ALL_CONTACTS,
    promise: ({ dispatch }) => {
        return Permissions.askAsync(Permissions.CONTACTS)
            .then(({ status }) => {
                if (status !== 'granted') {
                    Alert.alert(
                        'Contacts',
                        'Grant Glitr access to your contacts',
                        [
                            {
                                text: 'Ok',
                                onPress: () => Permissions.askAsync(Permissions.CONTACTS)
                                        .then(({ status }) => {
                                            if (status === 'granted') dispatch(addNewContacts());
                                        })
                            },
                            {text: 'cancel', onPress: () => console.log('cancel pressed')}
                        ]
                    );
                } else {
                    dispatch(addNewContacts());
                }
            });
    }
});

export const addNewContacts = (pageOffset = 0) => ({
    type: CONTACTS_ADD_NEW_CONTACTS,
    promise: ({ dispatch }) => {
        return Contacts.getContactsAsync({
            fields: [
                Contacts.THUMBNAIL,
                Contacts.NAME_PREFIX,
                Contacts.NAME_SUFFIX,
                Contacts.PHONE_NUMBERS,
            ],
            pageSize: 100,
            pageOffset,
        }).then(contacts => {
            if (!!contacts.hasNextPage) {
                dispatch(addNewContacts(pageOffset + 1));
            }
            const newContacts = contacts.data
                .filter(contact => !!contact.phoneNumbers.length)
                .map(({
                    id,
                    firstName,
                    lastName,
                    phoneNumbers,
                    thumbnail: {
                        uri
                    }
                }) => ({
                    id,
                    firstName,
                    lastName,
                    phoneNumbers,
                    thumbnail: uri
                }));
            return new Promise(resolve => resolve(newContacts));
        })
    }
});
