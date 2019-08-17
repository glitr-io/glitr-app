export const SAVE_MEME = 'SAVE_MEME';
export const SAVE_MEME_REQUEST = 'SAVE_MEME_REQUEST';
export const SAVE_MEME_SUCCESS = 'SAVE_MEME_SUCCESS';
export const SAVE_MEME_FAILURE = 'SAVE_MEME_FAILURE';

export const REMOVE_MEME = 'REMOVE_MEME';
export const REMOVE_MEME_REQUEST = 'REMOVE_MEME_REQUEST';
export const REMOVE_MEME_SUCCESS = 'REMOVE_MEME_SUCCESS';
export const REMOVE_MEME_FAILURE = 'REMOVE_MEME_FAILURE';

export const saveMeme = memeData => ({
    type: SAVE_MEME,
    promise: () => new Promise(resolve => resolve(memeData))
});

export const removeMeme = memeId => ({
    type: REMOVE_MEME,
    promise: () => new Promise(resolve => resolve(memeId))
});
