import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export function createTodo(payload: object, Authorization: any){
    return (dispatch: any) => fetchStoreData({
            dispatch,
            startLoading: startLoadingTodo,
            handlerSuccess: handlerSuccessLoadingTodo,
            handlerError: handlerErrorLoadingTodo,

            fetch: async () => { await request('/api/todo/generate', 'POST', {...payload}, { Authorization })}
        }
    )
}