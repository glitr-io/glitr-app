export const UPDATE_MEME_ITEMS = 'UPDATE_MEME_ITEMS';
export const ADD_NEW_MEME_ITEM = 'ADD_NEW_MEME_ITEM';
export const LOAD_CANVAS = 'LOAD_CANVAS';
export const RESET_CANVAS = 'RESET_CANVAS';

export const updateMemeItems = (memeItems) => ({
    type: UPDATE_MEME_ITEMS,
    payload: memeItems
});

export const addMemeItem = ({ type, value, style={} }) => ({
    type: ADD_NEW_MEME_ITEM,
    payload: ({ type, value, style })
});

export const loadCanvas = meme => ({
    type: LOAD_CANVAS,
    payload: meme
});

export const resetCanvas = () => ({
    type: RESET_CANVAS
});
