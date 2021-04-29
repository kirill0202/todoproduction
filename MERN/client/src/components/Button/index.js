import React from 'react';
import { MuiButton } from './styles';
import * as themes from './theme/index';

export function CaButton({ variant, type, color, ...props }) {
    const defaultTheme = 'blue';
    const currentTheme = themes[props.theme] || themes[defaultTheme];

    return (
        <MuiButton {...props} theme={currentTheme} type={type} variant={variant} color={color}>
             {props.children}
        </MuiButton>
    )
}