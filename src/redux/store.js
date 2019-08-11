import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import customMiddleware from './customMiddleware';
import reducer from './reducer';

const encryptor = createEncryptor({
    secretKey: 'my-super-secret-key'
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['account', 'contacts'],
    transforms: [encryptor]
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(
        // logger,
        thunkMiddleware,
        customMiddleware,
    )
);
export const persistor = persistStore(store);
