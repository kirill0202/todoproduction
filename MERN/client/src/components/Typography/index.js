import React from 'react';
import Typography from "@material-ui/core/Typography";

export function CaTypography({ component, variant, title }) {
    return <Typography component={component} variant={variant}>
        {title}
</Typography>
}