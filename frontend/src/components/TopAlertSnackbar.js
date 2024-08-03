import React from 'react'
import { Snackbar,Alert, styled } from '@mui/material';


const useStyles = styled((theme) => ({
    snackbar: {
      top: theme.spacing(2),
      bottom: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'fixed',
      width: 'fit-content',
      minWidth: 300,
    },
  }));

const TopAlertSnackbar = ({ open, message, severity, onClose }) => {
    const classes = useStyles();

    return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        className={classes.snackbar}
      >
        <Alert
          onClose={onClose}
          severity={severity} 
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    )
}

export default TopAlertSnackbar
