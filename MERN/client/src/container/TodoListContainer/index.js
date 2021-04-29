import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../components/Loading';
import { TodoList } from '../../components/TodoList';
import { AuthContext } from '../../context/AuthContext';

import { removeTodo } from '../../store/todo/delete';
import { getTodo } from '../../store/todo/list/index.ts';
import { updateTodoCompleted, updateTodoImportant } from '../../store/todo/update';

let checkDataTodoTimeout = null;

export const TodoListContainer = () => {
    const todo = useSelector(state => state.todoReducer.todo);
    const dispatch = useDispatch();

    const auth = useContext(AuthContext);
    const Authorization = `Bearer ${auth.token}`;

    const handlerRemoveTodo = (todoId) => {
        dispatch(removeTodo({ todoId }, Authorization));
    };

    const handlerUpdateCompletedTodo = (todoId) => {
         dispatch(updateTodoCompleted({ todoId }, Authorization));
    };

    const handlerUpdateImportendTodo = (todoId) => {
        dispatch(updateTodoImportant({ todoId }, Authorization));
    };

    const checkDataTodo = async (firstLoad = false) => {
        checkDataTodoTimeout = (firstLoad || checkDataTodoTimeout) && setTimeout(async () => {
        dispatch(getTodo(Authorization));
        checkDataTodo();
        }, 1000)
    };
    
    useEffect(() => {
      checkDataTodo(true);
      dispatch(getTodo(Authorization));
      return () => {
        checkDataTodoTimeout = null;
        checkDataTodo(false);
        clearTimeout(checkDataTodoTimeout);
      }
    }, []);
    
    return !todo.length ? <Loading/> : 
    <TodoList 
    todo={todo}
    handlerUpdateImportendTodo={handlerUpdateImportendTodo}
    handlerRemoveTodo={handlerRemoveTodo} 
    handlerUpdateCompletedTodo={handlerUpdateCompletedTodo}/>
}