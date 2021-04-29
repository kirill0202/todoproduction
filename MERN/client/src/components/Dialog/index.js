import React from 'react';
import { ThemeProvider } from 'styled-components';
import { dark } from './theme';
import StyledDialog from './styles';

export function Dialog({ children, handleClose, isDialogOpened }) {
    return (
        <ThemeProvider theme={dark}>
            <StyledDialog open={isDialogOpened}>
                {children}
            </StyledDialog>
        </ThemeProvider>
    )
}

