import { combineReducers } from 'redux';

import accountReducer from './account/accountReducer';
import memeEditorReducer from './meme-editor/memeEditorReducer';
import contactsReducer from './contacts/contactsReducer';
import chatsReducer from './chats/chatsReducer';

const reducer = combineReducers({
    account: accountReducer,
    memeEditor: memeEditorReducer,
    contacts: contactsReducer,
    chats: chatsReducer
});

export default reducer;
