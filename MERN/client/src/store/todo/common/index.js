const actionTypes = {
    TODO_START_LOADING: 'TODO_START_LOADING',
    TODO_HANDLER_SUCCESS: 'TODO_HANDLER_SUCCESS',
    TODO_HANDLER_ERROR: 'TODO_HANDLER_ERROR',
    CLEAR_TODO_ERROR: 'CLEAR_TODO_ERROR',
}

export const startLoadingTodo = () => ({ type: actionTypes.TODO_START_LOADING });
export const handlerSuccessLoadingTodo = () => ({ type: actionTypes.TODO_HANDLER_SUCCESS });
export const handlerErrorLoadingTodo = (payload) => ({ type: actionTypes.TODO_HANDLER_ERROR, payload });
export const clearHandlerError = () => ({ type: actionTypes.CLEAR_TODO_ERROR });

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.TODO_START_LOADING:
            return { ...state, isLoading: true}
        case actionTypes.TODO_HANDLER_SUCCESS:
            return { ...state, isLoading: false }
        case actionTypes.TODO_HANDLER_ERROR:
            return { ...state, isLoading: false, error: payload.message };
        case actionTypes.CLEAR_TODO_ERROR:
            return { ...state, error: null }
        default:
            return state;
    }
}
