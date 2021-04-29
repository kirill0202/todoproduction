import React from 'react';
import { CaButton } from '../Button';
import { CaContainer } from '../Container';
import { Field, Form } from '../Form';
import { CaTypography } from '../Typography';
import { Video } from '../Video';
import { WrapperForm, WrapperLink, BoxForm } from './styles';


export function Login({ handlerFormData }) {
    return (
        <BoxForm>
            <Video />
            <CaContainer component="main" maxWidth="xs">
                <CaTypography component="h1" variant="h5" title="Sign in" />
                <WrapperForm>
                    <Form onSubmit={handlerFormData}>
                        <Field
                            label="Email Address"
                            required
                            variant='outlined'
                            name="email"
                            type="email"
                        />
                        <Field
                            label="Password"
                            required
                            variant='outlined'
                            name='password'
                            type="password"
                        />
                        <CaButton type="submit" variant="contained" color="primary">
                            Sing in
                        </CaButton>
                        <WrapperLink to='/registration'>
                            Registration
                        </WrapperLink>
                    </Form>
                </WrapperForm>
            </CaContainer>
        </BoxForm>
    )
}