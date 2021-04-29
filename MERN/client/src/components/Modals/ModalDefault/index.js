import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaButton } from '../../Button';
import { Dialog } from '../../Dialog';
import { Form, Field } from '../../Form';
import { FooterSection } from '../ModalDelete/styles';
import { ProfileInfo, InputWrapper } from './styles';
import { AuthContext } from '../../../context/AuthContext';
import { CaAlert } from '../../Alert';
import { clearHandlerError } from '../../../store/todo/common';
import { createTodo } from '../../../store/todo/crete/index.ts';



export function CreateModal({ isOpen }) {
    const dispatch = useDispatch();
    const error = useSelector(state => state.todoReducer.error);

    const auth = useContext(AuthContext);
    const Authorization = `Bearer ${auth.token}`;
    // const [isOpenModal, setCloseModal] = useState(false);

    const handlerSumbitForm = (formSumbit) => {
        formSumbit.preventDefault();

        const { target } = formSumbit;
        const dataForm = {
            title: target.title.value,
            description: target.description.value
        };
        dispatch(createTodo(dataForm, Authorization));
    }

    return <Dialog isDialogOpened={isOpen}>
        <Form onSubmit={handlerSumbitForm}>
            <ProfileInfo>
                <InputWrapper>
                    <Field placeholder="title" name="title" required />
                    <Field placeholder="description" name="description" required/>
                </InputWrapper>
            </ProfileInfo>
            <FooterSection>
                <CaButton theme="dark" type="sumbit">
                    send
                </CaButton>
                <CaButton theme="dark">
                    close
                </CaButton>
            </FooterSection>
        </Form>
        <CaAlert text={error}
            severity="error"
            autoHideDuration={2000}
            open={error}
            onClose={() => dispatch(clearHandlerError())} />
    </Dialog>
}