import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../context/AuthContext';
import { removeTodo } from '../../../store/todo/delete';
import { CaButton } from '../../Button';
import { Dialog } from '../../Dialog';
import { ModalInfo, HeaderSection, FooterSection } from './styles';

export function ModalDelete({ isOpen, title, todoId }) {
    const [isOpenModal, setCloseModal] = useState(true);

    const auth = useContext(AuthContext);
    const Authorization = `Bearer ${auth.token}`;

    const dispatch = useDispatch();

    const handlerCloseModal = () => {
        setCloseModal(false)
    };

    const HandlerRemoveTodo = () => {
        const data = { todoId }
        dispatch(removeTodo(data, Authorization));
    }

    return (
        <Dialog isDialogOpened={isOpen && isOpenModal}>
            <ModalInfo>
                <HeaderSection>
                    Действительно хотите удалить таску {title}?
                  </HeaderSection>
                <FooterSection>
                    <CaButton theme="dark" onClick={HandlerRemoveTodo}>
                        Remove
                  </CaButton>
                    <CaButton theme="dark" onClick={handlerCloseModal}>
                        Close
                  </CaButton>
                </FooterSection>
            </ModalInfo>
        </Dialog>
    )
}