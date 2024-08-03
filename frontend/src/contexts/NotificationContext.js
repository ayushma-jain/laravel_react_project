import React, { createContext , useState,useContext} from 'react'
import TopAlertSnackbar from '../components/TopAlertSnackbar';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
    const handleSuccess = (message) => {
      setSnackbarMessage(message);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    };
  
    const handleError = (message) => {
      setSnackbarMessage(message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    };
  
    const handleCloseSnackbar = () => {
      setSnackbarOpen(false);
    };
  
    return (
      <NotificationContext.Provider value={{ handleSuccess, handleError }}>
        {children}
        
        <TopAlertSnackbar
          open={snackbarOpen}
          message={snackbarMessage}
          severity={snackbarSeverity}
          onClose={handleCloseSnackbar}
        />
      </NotificationContext.Provider>
    );
  };
  
  export const useNotification = () => useContext(NotificationContext);


