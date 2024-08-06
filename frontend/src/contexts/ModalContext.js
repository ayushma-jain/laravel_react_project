import React, { createContext, useContext, useState } from 'react'
import { StyledDialog } from '../components/StyledComponents'
import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'

const ModalContext = createContext();
export const ModalProvider = ({childern}) => {
console.log(childern);
const [isOpen, setIsOpen] = useState(false);
const [modalContent, setModalContent] = useState(null);

const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

const closeModal = () => {
  setIsOpen(false);
  setModalContent(null);
};
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent }}>
        <StyledDialog open={isOpen}>
            <DialogTitle>
                <Typography variant='h4'>Dialog Title</Typography>
            </DialogTitle>
            <DialogContent>
                Dialog content goes here.
            </DialogContent>
            <DialogActions>
                <Button>Save</Button>
                <Button>Cancel</Button>
            </DialogActions>
        </StyledDialog>
    </ModalContext.Provider>
  )
};

export const useModal = () => useContext(ModalContext);
