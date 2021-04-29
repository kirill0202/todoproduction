import React from 'react';
import { logout, todo } from '../../static/index';
import { HeaderLogo, HeaderMenu, HeaderTitle, WrapperLogo, Logout, WrapperHader } from './styles';


export function Header({ handlerLogout }) {
    return <HeaderMenu>
        <WrapperHader>
            <WrapperLogo>
                <HeaderLogo src={todo} />
                <HeaderTitle>Todo</HeaderTitle>
            </WrapperLogo>
            <Logout src={logout} onClick={handlerLogout}/>
        </WrapperHader>
    </HeaderMenu>
}