import React from 'react';
import { AlertStyles } from './styles';
import Snackbar from '@material-ui/core/Snackbar';

export const CaAlert = ({ text, severity, open, onClose, autoHideDuration }) => {

  return <Snackbar autoHideDuration={autoHideDuration} open={open} onClose={onClose}>
    <AlertStyles severity={severity}>
      {text}
    </AlertStyles>
  </Snackbar>

}