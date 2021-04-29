import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export function removeTodo(payload, Authorization){
    return (dispatch) => fetchStoreData({
            dispatch,
            startLoading: startLoadingTodo,
            handlerSuccess: handlerSuccessLoadingTodo,
            handlerError: handlerErrorLoadingTodo,

            fetch: async () => { await request('/api/todo', 'DELETE', {...payload}, { Authorization })}
        }
    )
}