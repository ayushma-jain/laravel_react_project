import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNotification } from '../contexts/NotificationContext';

const TodoTable = () => {

    const [todos,setTodos] = useState([]);
    const { handleSuccess, handleError } = useNotification();
    useEffect(() => {
        //Get all todo list.
        const fetchTodos = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/todos`);
                const result = await response.json();
                setTodos(result.data);
                handleSuccess('Data Retrived Successfully!');   
            } catch (error) {
                handleError('There was an error fetching the todos!');
            }
        };
        fetchTodos();
        }, []); 
  return (
    
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{ width: '10%' }}>ID</TableCell>
                    <TableCell style={{ width: '50%' }}>Todo List</TableCell>
                    <TableCell style={{ width: '20%' }}>Created At</TableCell>
                    <TableCell style={{ width: '20%' }}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {todos.map((todo, index) => (
                    <TableRow key={index} style={{ backgroundColor: todo.complete_status ? 'cadetblue' : 'white' }}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell style={{ textDecoration: todo.complete_status ? 'line-through' : 'none' }}>
                            {todo.task}
                        </TableCell>
                        <TableCell>
                            {todo.created_at}
                        </TableCell>
                        
                        <TableCell>
                            <Stack direction="row" spacing={2}>
                                {/* <Button color="primary" variant='contained' onClick={() => handleComplete(todo.id)} disabled={todo.complete_status ? true : false}>
                                    Complete
                                </Button>
                                <Button color="error" variant='contained' onClick={() => handleDelete(todo.id)} disabled={todo.complete_status ? true : false}>
                                    Delete
                                </Button> */}
                            </Stack>
                        </TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TodoTable
