import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaAlert } from '../../components/Alert';
import { Login } from '../../components/Login';
import { AuthContext } from '../../context/AuthContext';

import { clearHanderSuccess, clearHandlerError } from '../../store/auth/common';
import { authLogin } from '../../store/auth/login';

export function LoginContainer() {
    const user = useSelector(state => state.authReducer.user);
    const error = useSelector(state => state.authReducer.error);
    const success = useSelector(state => state.authReducer.success);
    const auth = useContext(AuthContext);

    const dispatch = useDispatch();

    const handlerFormData = (formSumbit) => {
        const { target } = formSumbit;

        formSumbit.preventDefault();
        const data = {
            email: target.email.value,
            password: target.password.value
        }
        dispatch(authLogin(data));
        if (user) {
            auth.login(user.token, user.userId);
        }
    };

    useEffect(() => {
        return () => {
            dispatch(clearHandlerError());
            dispatch(clearHanderSuccess());
        }
    }, []);

    useEffect(() => {
        if (user) {
          auth.login(user.token, user.userId);
        }
    }, [user])

    return <>
        <CaAlert text={error}
            severity="error"
            autoHideDuration={2000}
            open={error}
            onClose={() => dispatch(clearHandlerError())} />
        <CaAlert
            text={"Вы успешно авторизовались!"}
            severity="success"
            autoHideDuration={2000}
            open={success}
            onClose={() => dispatch(clearHanderSuccess())} />
        <Login handlerFormData={handlerFormData} />
    </>

}

