import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Header } from '../../components/Header';
import { AuthContext } from '../../context/AuthContext';
import { clearUser } from '../../store/auth/login';
import { clearTodos } from '../../store/todo/list';

export function HeaderContainer() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useContext(AuthContext);

    const handlerLogout = () => {
        auth.logout();
        dispatch(clearUser());
        dispatch(clearTodos());
        history.push('/login');
    }

    return <Header handlerLogout={handlerLogout} />
}