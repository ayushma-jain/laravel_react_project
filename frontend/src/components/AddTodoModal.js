import React, { useContext } from 'react'
import { StyledDialog } from './StyledComponents'
import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import useModal from '../contexts/ModalContext'

const AddTodoModal = () => {
    const {modal} = useModal();
    
  return (
    <StyledDialog open="true">
        <DialogTitle>
            <Typography variant='h4'>Add Task</Typography>
        </DialogTitle>
        <DialogContent>
            Your content Here...
        </DialogContent>
        <DialogActions>
            <Button>Add Task</Button>
            <Button>Cancel</Button>
        </DialogActions>
    </StyledDialog>
  )
}

export default AddTodoModal
