import { styled } from '@mui/material/styles';
import {Box, Button, Dialog} from "@mui/material"

export const AddButton = styled(Button)(( {theme}) =>({
    "margin" : "18px 0px",
    "padding" : "14px"
}));

export  const StyledHeading = styled('div')(( {theme} ) => ({
    fontWeight: 'bold',
    textAlign: 'left',
    borderBottom: '2px solid #000',  
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  
    padding: 2, 
    margin: 10, 
}));

export const DateHeading = styled('div')(({theme}) => ({
    fontWeight: 'bold',
    textTransform: 'uppercase'
}))

export const CalendarDayBox = styled('Box')(({theme})=>({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '80px', 
    border: '1px solid #ccc',
    cursor: 'pointer',
    '&.empty': {
        backgroundColor: '#f0f0f0'
    }
}))

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '.MuiPaper-root': {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
      borderRadius: '8px',
      minWidth: '800px',
    },
    '.MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }));
