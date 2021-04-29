import React from 'react';
import { Container } from '@material-ui/core';


export function CaContainer({ component, maxWidth, children }) {
    return <Container component={component} maxWidth={maxWidth}>
        {children}
    </Container>
}