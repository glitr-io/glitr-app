import accountReducer from './account/accountReducer';
import memeEditorReducer from './meme-editor/memeEditorReducer';
import contactsReducer from './contacts/contactsReducer';
import chatsReducer from './chats/chatsReducer';
import libraryReducer from './library/libraryReducer';

const reducer = combineReducers => combineReducers({
    account: accountReducer,
    memeEditor: memeEditorReducer,
    contacts: contactsReducer,
    chats: chatsReducer,
    library: libraryReducer
});

export default reducer;
