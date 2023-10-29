// import React, {useState} from 'react';
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store";
import {addTodolistAC} from "./store/todolist-reducer";
import TodolistWithRedux from "./TodolistWithRedux";
import {TaskType} from "./Todolist";

export type FilterValueType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string,
    title: string,
    filter: FilterValueType
}


export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {


    const todoLists = useSelector<AppRootState, Array<TodoListsType>>(state => state.todolists)
    // const task = useSelector<AppRootState, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch()


    // const changeCheckBox = (todoListId: string, taskID: string, newIsDone: boolean) => {
    //     dispatch(changeTaskStatusAC(taskID, newIsDone, todoListId))
    // }


    function addTodoList(title: string) {
        dispatch(addTodolistAC(title))
    }

    return (
        <div className="App">

            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu'>
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6'>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodoList} maxLenghtMessage={15}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoLists.map(el => {
                        return <Grid item key={el.id}>
                            <Paper style={{padding: '10px'}}>
                                <TodolistWithRedux
                                    todolist={el}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>

            </Container>

        </div>
    )
}

export default AppWithRedux;
