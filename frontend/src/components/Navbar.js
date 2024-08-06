import { AppBar, Button, Box, DialogActions, DialogContent, DialogTitle, Grid, styled, TextField, Toolbar, Typography } from '@mui/material';
import {useModal} from '../contexts/ModalContext';
import { useState } from 'react';
import { StyledDialog } from './StyledComponents';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import Datepicker from './Datepicker';


const RootDiv = styled('div')(({theme}) => ({
    flexGrow: 1,
}));
const MenuButton = styled(Button)(({theme}) => ({
    marginRight: 200,
}));


const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
const [modalContent, setModalContent] = useState(null);

const handleOpenModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

const handleCloseModal = () => {
  setIsOpen(false);
  setModalContent(null);
};
    
    return (
        <RootDiv>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        My App
                    </Typography>
                   
                    <Button color="inherit" onClick={handleOpenModal}>Add Task</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        
            <StyledDialog open={isOpen}>
                <DialogTitle>
                    <Typography variant='h4'>Add Task</Typography>
                </DialogTitle>
                <DialogContent>
                    
                    <Box component='form' autoComplete="off"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '80ch' },
                      }}
                    >
                        <TextField  variant='outlined' label='Enter your task' color='secondary'/>
                        <TextField  variant='outlined' label='Description' color='secondary' multiline rows={5}/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Start Date"/>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="End Date"/>
                        </LocalizationProvider>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button>Save</Button>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                </DialogActions>
            </StyledDialog>
        </RootDiv>
    )
}

export default Navbar
