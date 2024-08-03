import React, { useEffect, useState } from "react";
import { Container, TextField, Button,Typography, Grid, TableContainer, TableHead, Table, TableRow, TableCell, TableBody,Paper, Stack,CircularProgress} from '@mui/material';
import axios from "axios";
import { AddButton, StyledHeading } from "./StyledComponents";
import { useNotification } from "../contexts/NotificationContext";


const TodoList = () => {
    const [todos,setTodos] = useState([]);
    const [task, setTask] = useState();
    const [loading, setLoading] = useState(false);
    const { handleSuccess, handleError } = useNotification();

  useEffect(() => {
    //Get all todo list.
    const fetchTodos = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/todos`);
            const result = await response.json();
            setTodos(result.data);
        } catch (error) {
            handleError('There was an error fetching the todos!', error);
        }
    };
    fetchTodos();
    }, []); 

    //Handle task add.
    const handleAddTodo = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/todos', { task });
            setTodos([...todos, {'id':response.data.id,'task':response.data.task,'complete_status':response.data.complete_status,'created_at':response.data.created_at}]);
            setTask('');
            handleSuccess('Task Added Successfully');
        } catch (error) {
            handleError('There was an error saving the todo!', error);
        }
    };
  
    //Handle task complete status.
    const handleToggleComplete = async(id) => {
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api/todos/${id}`, { complete_status: true });
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
            handleSuccess('Task marks as successfully');
        } catch (error) {
            handleError('There was an error updating the todo status!', error);
        }
       
    };
  
    //Handle Delete Todo.
    const handleDeleteTodo = async(id) => {
        try {
            console.log(id);
            const response = await axios.delete('http://127.0.0.1:8000/api/todos/'+id);
            setTodos(todos.filter(todo => todo.id !== id));
            handleSuccess('Task deleted successfully');
        } catch (error) {
            handleError(error.message);
        }
    };

  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField 
                label="New Task" 
                variant="outlined" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                fullWidth 
                margin="normal"
                />
            </Grid>
            <Grid item xs={4}>
                <AddButton variant='contained'
                    color="success" 
                    onClick={handleAddTodo}
                    fullWidth >
                    Add Task
                </AddButton>
            </Grid>
            <Grid item xs={12}>
                <StyledHeading>
                    <Typography variant="h4" gutterBottom >
                        TODO LIST
                    </Typography>
                </StyledHeading>
                {loading ? (
                    <CircularProgress />
                ) : (
                <TableContainer component={Paper}>
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
                                            <Button color="primary" variant='contained' onClick={() => handleToggleComplete(todo.id)} disabled={todo.complete_status ? true : false}>
                                                Complete
                                            </Button>
                                            <Button color="error" variant='contained' onClick={() => handleDeleteTodo(todo.id)} disabled={todo.complete_status ? true : false}>
                                                Delete
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )}
            </Grid>
        </Grid>
    </Container>
  )
}
export default TodoList
