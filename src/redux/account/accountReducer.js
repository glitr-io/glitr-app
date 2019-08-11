import {
    LOGIN_WITH_PASSWORD_SUCCESS,
    LOGOUT,
    ACCOUNT_CHANGE_DISPLAY_NAME_SUCCESS,
    ACCOUNT_CHANGE_DISPLAY_ICON_SUCCESS,
    ACCOUNT_UPDATE_LOGIN_FORM
} from './accountActions';

const initialState = {
    token: '',
    loggedIn: false,
    accountId: '123456',
    email: 'email@email.com',
    displayName: 'test display name',
    displayIcon: 'https://thumbs.dreamstime.com/t/gray-fluffy-cat-toy-lies-yellow-background-56173920.jpg',
    loginForm: {
        email: '',
        password: '',
        confirmPassword: '',
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_UPDATE_LOGIN_FORM:
            return {
                ...state,
                loginForm: {
                    ...state.loginForm,
                    ...action.payload
                }
            };
        case LOGIN_WITH_PASSWORD_SUCCESS:
            return {
                ...state,
                token: action.result.data.login.token,
                loggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                token: '',
                loggedIn: false
            };
        case ACCOUNT_CHANGE_DISPLAY_NAME_SUCCESS:
            return {
                ...state,
                displayName: action.result
            };
        case ACCOUNT_CHANGE_DISPLAY_ICON_SUCCESS:
            return {
                ...state,
                displayIcon: action.result
            };
        default:
            return state;
    }
};
