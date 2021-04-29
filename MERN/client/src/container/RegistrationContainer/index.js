import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CaAlert } from '../../components/Alert';
import { Registration } from '../../components/Registration';

import { clearHanderSuccess, clearHandlerError } from '../../store/auth/common';
import { authRegistation } from '../../store/auth/registration';

export function RegistrationContainer() {
    const error = useSelector(state => state.authReducer.error);
    const success = useSelector(state => state.authReducer.success);

    const dispatch = useDispatch();

    const handlerFormData = (formSumbit) => {
        const { target } = formSumbit;
        formSumbit.preventDefault();
        const data = {
            email: target.email.value,
            password: target.password.value
        }
        dispatch(authRegistation(data));
    }

    useEffect(() => {
        return () => {
            dispatch(clearHandlerError());
            dispatch(clearHanderSuccess());
        }
    }, [dispatch]);

    return <>
        <CaAlert text={error}
            severity="error"
            autoHideDuration={2000}
            open={error}
            onClose={() => dispatch(clearHandlerError())} />
        <CaAlert
            text={"Пользователь создан!"}
            severity="success"
            autoHideDuration={2000}
            open={success}
            onClose={() => dispatch(clearHanderSuccess())} />
        <Registration
            handlerFormData={handlerFormData} />
    </>

}