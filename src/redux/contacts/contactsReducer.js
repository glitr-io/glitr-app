import {
    CONTACTS_ADD_NEW_CONTACTS_SUCCESS
} from './contactsActions';
import Chance from 'chance';
const chance = new Chance();

const initialState = {
    contacts: [
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'clark',
            lastName: 'kent'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'bruce',
            lastName: 'wayne'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'diana',
            lastName: 'prince'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'wally',
            lastName: 'west'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'arthur',
            lastName: 'curry'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'victor',
            lastName: 'stone'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'hal',
            lastName: 'jordan'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'john',
            lastName: 'stewart'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'j\'onn',
            lastName: 'j\'onzz'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'ray',
            lastName: 'palmer'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'carter',
            lastName: 'hall'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'shiera',
            lastName: 'hall'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'rex',
            lastName: 'mason'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'dinah',
            lastName: 'lance'
        },
        {
            id: chance.hash(),
            thumbnail: `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`,
            firstName: 'zatanna',
            lastName: 'zatara'
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CONTACTS_ADD_NEW_CONTACTS_SUCCESS:
            let oldContacts = [...state.contacts];
            action.result.forEach(newContact => {
                const contactIndex = oldContacts
                    .findIndex(oldContact => oldContact.id === newContact.id);
                if (contactIndex > -1) {
                    oldContacts.splice(contactIndex, 1, {
                        ...oldContacts[contactIndex],
                        ...newContact
                    });
                } else {
                    oldContacts = [...oldContacts, newContact];
                }
            });

            return {
                ...state,
                contacts: oldContacts
            };
        default:
            return state;
    }
};
