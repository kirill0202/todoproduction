const actionTypes = {
    AUTH_START_LOADING: 'AUTH_START_LOADING',
    AUTH_HANDLER_SUCCESS: 'AUTH_HANDLER_SUCCESS',
    AUTH_HANDLER_ERROR: 'AUTH_HANDLER_ERROR',
    AUTH_CLEAR_ERROR: 'AUTH_CLEAR_ERROR',
    AUTH_CLEAR_SUCCESS: 'AUTH_CLEAR_SUCCESS',
}

export const startLoadingAuth = () => ({ type: actionTypes.AUTH_START_LOADING });
export const handlerSuccessLoadingAuth = (payload) => ({ type: actionTypes.AUTH_HANDLER_SUCCESS, payload });
export const handlerErrorLoadingAuth = (payload) => ({ type: actionTypes.AUTH_HANDLER_ERROR, payload });
export const clearHandlerError = () => ({ type: actionTypes.AUTH_CLEAR_ERROR });
export const clearHanderSuccess = () => ({ type: actionTypes.AUTH_CLEAR_SUCCESS });

export default function reducer(state, { type, payload }) {

    switch (type) {
        case actionTypes.AUTH_START_LOADING:
            return { ...state, isLoading: true, success: false }
        case actionTypes.AUTH_HANDLER_SUCCESS:
            return { ...state, isLoading: false, success: true }
        case actionTypes.AUTH_HANDLER_ERROR:
            return { ...state, isLoading: false, success: false, error: payload.message }
        case actionTypes.AUTH_CLEAR_ERROR:
            return { ...state, error: null }
        case actionTypes.AUTH_CLEAR_SUCCESS:
            return { ...state, success: null }
        default:
            return state;
    }
}
