import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../static';
import { showModal } from '../../store/modal';
import { AddTodoIcon } from './styles';

export function AddTodo() {
    const dispatch = useDispatch();

    const openModal = () => {
        const data = {
            name: 'createModal',
            isOpen: true
        }
        dispatch(showModal(data))
    }
    return (
        <AddTodoIcon src={addTodo} onClick={openModal} />
    )
}