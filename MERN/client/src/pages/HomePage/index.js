import React from 'react';
import { AddTodo } from '../../components/AddTodo';
import { HeaderContainer } from '../../container/HeaderContainer';
import Modals from '../../components/Modals';
import { TodoListContainer } from '../../container/TodoListContainer';


export function HomePage() {
    return (
        <>
            <HeaderContainer />
            <AddTodo />
            <TodoListContainer/>
            <Modals />
        </>
    )
}