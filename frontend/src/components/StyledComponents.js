import { styled } from '@mui/material/styles';
import {Button} from "@mui/material"

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
    margin: 5, 
}));
