import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export function updateTodoCompleted(payload, Authorization) {
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerSuccess: handlerSuccessLoadingTodo,
        handlerError: handlerErrorLoadingTodo,
        fetch: async () => { await request('/api/todo/completed', 'PUT', { ...payload }, { Authorization })}
    })
}

export function updateTodoImportant(payload, Authorization) {
    console.log(Authorization)
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerSuccess: handlerSuccessLoadingTodo,
        handlerError: handlerErrorLoadingTodo,
        fetch: async () => { await request('/api/todo/importanted', 'PUT', { ...payload }, { Authorization })}
    })
}

