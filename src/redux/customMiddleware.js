import fetch from './utils/clients/fetchClient';

export default ({ dispatch, getState }) => next => (action) => {
    const { promise, type, ...rest } = action;

    if (!promise) return next(action);

    const REQUEST = `${type}_REQUEST`;
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    dispatch({ ...rest, type: REQUEST });

    return promise({ fetch, dispatch, getState })
        .then(
            result => dispatch({ ...rest, result, type: SUCCESS })
        ).catch(
            error => dispatch({ ...rest, error, type: FAILURE })
        );
};
