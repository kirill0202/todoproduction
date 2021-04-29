import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

type actionTypesTodo = {
  type: typeof actionTypes.SET_TODO
  payload: Array<{}>
};

type actionTypesClear = {
  type: typeof actionTypes.CLEAR_TODOS
};

type reducerParamsType = {
  type: string,
  payload: Array<{
    _id: string,
    data: string,
    description: string,
    title: string,
    owner: string,
    completed: boolean,
    importanted: boolean,
  }>
};

export const actionTypes = {
    SET_TODO: 'SET_TODO',
    CLEAR_TODOS: 'CLEAR_TODOS'
};

const getTodoAction = (payload: Array<{}>):actionTypesTodo  => ({ type: actionTypes.SET_TODO, payload });
export const clearTodos = (): actionTypesClear => ({ type: actionTypes.CLEAR_TODOS });

export function getTodo(Authorization: string){
    return (dispatch: Function) => fetchStoreData({
            dispatch,
            startLoading: startLoadingTodo,
            handlerSuccess: handlerSuccessLoadingTodo,
            handlerError: handlerErrorLoadingTodo,
            fetch: async () => { 
                const data = await request('/api/todo', 'GET', null, { Authorization });
                dispatch(getTodoAction(data));
            }
        }
    )
}

export default function reducer(state: Array<{}>, { type, payload }: reducerParamsType) {
    switch (type) {
      case actionTypes.SET_TODO:
        return { ...state, todo: payload };
      case actionTypes.CLEAR_TODOS:
        return { ...state, todo: [] };
      default:
        return state;
    }
  }
  