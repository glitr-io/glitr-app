export const LOGOUT = 'LOGOUT';

export const LOGIN_WITH_SOCIAL_MEDIA = 'LOGIN_WITH_SOCIAL_MEDIA';
export const LOGIN_WITH_SOCIAL_MEDIA_REQUEST = 'LOGIN_WITH_SOCIAL_MEDIA_REQUEST';
export const LOGIN_WITH_SOCIAL_MEDIA_SUCCESS = 'LOGIN_WITH_SOCIAL_MEDIA_SUCCESS';
export const LOGIN_WITH_SOCIAL_MEDIA_FAILURE = 'LOGIN_WITH_SOCIAL_MEDIA_FAILURE';

export const LOGIN_WITH_PASSWORD = 'LOGIN_WITH_PASSWORD';
export const LOGIN_WITH_PASSWORD_REQUEST = 'LOGIN_WITH_PASSWORD_REQUEST';
export const LOGIN_WITH_PASSWORD_SUCCESS = 'LOGIN_WITH_PASSWORD_SUCCESS';
export const LOGIN_WITH_PASSWORD_FAILURE = 'LOGIN_WITH_PASSWORD_FAILURE';

export const REGISTER_WITH_PASSWORD = 'REGISTER_WITH_PASSWORD';
export const REGISTER_WITH_PASSWORD_REQUEST = 'REGISTER_WITH_PASSWORD_REQUEST';
export const REGISTER_WITH_PASSWORD_SUCCESS = 'REGISTER_WITH_PASSWORD_SUCCESS';
export const REGISTER_WITH_PASSWORD_FAILURE = 'REGISTER_WITH_PASSWORD_FAILURE';

export const ACCOUNT_CHANGE_DISPLAY_NAME = 'ACCOUNT_CHANGE_DISPLAY_NAME';
export const ACCOUNT_CHANGE_DISPLAY_NAME_REQUEST = 'ACCOUNT_CHANGE_DISPLAY_NAME_REQUEST';
export const ACCOUNT_CHANGE_DISPLAY_NAME_SUCCESS = 'ACCOUNT_CHANGE_DISPLAY_NAME_SUCCESS';
export const ACCOUNT_CHANGE_DISPLAY_NAME_FAILURE = 'ACCOUNT_CHANGE_DISPLAY_NAME_FAILURE';

export const ACCOUNT_CHANGE_DISPLAY_ICON = 'ACCOUNT_CHANGE_DISPLAY_ICON';
export const ACCOUNT_CHANGE_DISPLAY_ICON_REQUEST = 'ACCOUNT_CHANGE_DISPLAY_ICON_REQUEST';
export const ACCOUNT_CHANGE_DISPLAY_ICON_SUCCESS = 'ACCOUNT_CHANGE_DISPLAY_ICON_SUCCESS';
export const ACCOUNT_CHANGE_DISPLAY_ICON_FAILURE = 'ACCOUNT_CHANGE_DISPLAY_ICON_FAILURE';

export const ACCOUNT_UPDATE_LOGIN_FORM = 'ACCOUNT_UPDATE_LOGIN_FORM';

export const register = (email, password) => ({
    type: REGISTER_WITH_PASSWORD,
    promise: ({ fetch }) => fetch.post('http://192.168.1.53:4000', {
        query: `mutation {
            register (
                email: "${email}",
                password: "${password}"
            ) {
                id
            }
        }`
    })
        .then(response => console.log(response))
});

export const logout = () => ({
    type: LOGOUT
});

export const loginWithPassword = (email, password) => ({
    type: LOGIN_WITH_PASSWORD,
    promise: ({
        fetch,
        getState
    }) => fetch.post('http://192.168.1.53:4000', {
        query: `mutation {
            login (
                email: "${email}"
                password: "${password}"
            ) {
                token
                user {
                    id
                    email
                }
            }
        }`
    }, { authorization: `bearer ${getState().account.token}` })
});

export const loginWithSocialMedia = (socialMediaType) => ({
    type: LOGIN_WITH_SOCIAL_MEDIA,
    promise: () => new Promise((resolve) => resolve(newDisplayName))
})

export const changeDisplayName = (newDisplayName) => ({
    type: ACCOUNT_CHANGE_DISPLAY_NAME,
    promise: () => new Promise((resolve) => resolve(newDisplayName))
});

export const changeDisplayIcon = (newDisplayIcon) => ({
    type: ACCOUNT_CHANGE_DISPLAY_ICON,
    promise: () => new Promise((resolve) => resolve(newDisplayIcon))
});

export const updateLoginForm = (update) => ({
    type: ACCOUNT_UPDATE_LOGIN_FORM,
    payload: update
});
