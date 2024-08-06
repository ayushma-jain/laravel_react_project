import React from 'react';
import { Snackbar, Alert, styled } from '@mui/material';

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  top: theme.spacing(2),
  bottom: 'auto',
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'fixed',
  width: 'fit-content',
  minWidth: 300,
}));

const TopAlertSnackbar = ({ open, message, severity, onClose }) => {
  return (
    <StyledSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity} 
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </StyledSnackbar>
  );
}

export default TopAlertSnackbar;