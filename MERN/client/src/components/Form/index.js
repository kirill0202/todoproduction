import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormStyles } from './styles';

function Form({ onSubmit, children }) {
    return (
        <FormStyles onSubmit={onSubmit}>
            {children}
        </FormStyles>
    )
}

function Field({ name, placeholder, label, required, variant, type }) {
    return <div>
        <TextField 
        variant={variant}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        label={label}
        autoFocus 
        fullWidth />
    </div>

}

export { Form, Field };