export const UPDATE_MEME_ITEMS = 'UPDATE_MEME_ITEMS';
export const ADD_NEW_MEME_ITEM = 'ADD_NEW_MEME_ITEM';

export const updateMemeItems = (memeItems) => ({
    type: UPDATE_MEME_ITEMS,
    payload: memeItems
});

export const addMemeItem = ({ type, value, style={} }) => ({
    type: ADD_NEW_MEME_ITEM,
    payload: ({ type, value, style })
});
