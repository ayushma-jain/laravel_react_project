import React from 'react'
import { StyledDialog } from './StyledComponents'
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import TodoTable from './TodoTable'

const TodoCheckList = ({selectedDay,open,setOpen}) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledDialog open={open} onClose={handleClose}>
        <DialogTitle>Day {selectedDay}</DialogTitle>
        <DialogContent>
            <TodoTable/>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Close
        </Button>
        </DialogActions>
  </StyledDialog>
  )
}

export default TodoCheckList
