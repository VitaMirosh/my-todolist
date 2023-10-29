import React from 'react';
import './App.css';
import {TaskType} from "./Todolist";
import {useReducer} from "react";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistAC,
    changeTodolistFilterAC,
    removeTodolistAC,
    todolistReducer
} from "./store/todolist-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./store/tasks-reducer";

export type FilterValueType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string,
    title: string,
    filter: FilterValueType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducers() {


    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todoLists, dispatchToTodolistsReducer] = useReducer(todolistReducer, [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ])
    let [task, dispatchTasksReducers] = useReducer(tasksReducer, {
        [todoListId1]: [
            {id: v1(), title: "HTML&CSS", isDone: false},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Redux", isDone: true},
        ],
        [todoListId2]: [
            {id: v1(), title: "HTML&CSS", isDone: false},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Redux", isDone: true},
        ]
    });


    const changeCheckBox = (todoListId: string, taskID: string, newIsDone: boolean) => {
        dispatchTasksReducers(changeTaskStatusAC(taskID, newIsDone, todoListId))
    }


    const removeTask = (todoListId: string, taskId: string) => {
        dispatchTasksReducers(removeTaskAC(taskId, todoListId))

    }

    function addTask(todoListId: string, title: string) {
        dispatchTasksReducers(addTaskAC(title, todoListId))

    }


    const changeFilter = (todoListId: string, valueFilter: FilterValueType) => {
      dispatchToTodolistsReducer( changeTodolistFilterAC(todoListId,valueFilter))

    }

    const removeTodoList = (todoListId: string) => {
        const action = removeTodolistAC(todoListId)
       // dispatchTasksReducers(action)
        dispatchToTodolistsReducer(action)
    }

    function addTodoList(title: string) {
        const action = addTodolistAC(title)
        dispatchToTodolistsReducer(action)
        dispatchTasksReducers(action)
    }


    const changeTaskTitle = (id: string, newTitle: string, todoListId: string) => {
        dispatchTasksReducers(changeTaskTitleAC(id, newTitle, todoListId));


    }
    const changeTodoListTitle = (todoListId: string, newTitle: string) => {
        const action = changeTodolistAC(todoListId,newTitle)
        dispatchToTodolistsReducer(action)

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
                        let filteredTasks = task[el.id];
                        if (el.filter === "active") {
                            filteredTasks = task[el.id].filter(t => !t.isDone);
                        }
                        if (el.filter === "completed") {
                            filteredTasks = task[el.id].filter(t => t.isDone);
                        }
                        return <Grid item>
                            <Paper style={{padding: '10px'}}>
                                {/*<Todolist*/}
                                {/*    key={el.id}*/}
                                {/*    todoListId={el.id}*/}
                                {/*    title={el.title}*/}
                                {/*    task={filteredTasks}*/}
                                {/*    removeTask={removeTask}*/}
                                {/*    addTask={addTask}*/}
                                {/*    changeCheckBox={changeCheckBox}*/}
                                {/*    changeTaskTitle={changeTaskTitle}*/}
                                {/*    changeTodoListTitle={changeTodoListTitle}*/}
                                {/*    filter={el.filter}*/}
                                {/*    changeFilter={changeFilter}*/}
                                {/*    removeTodoList={removeTodoList}*/}
                                {/*/>*/}
                            </Paper>
                        </Grid>
                    })}
                </Grid>

            </Container>

        </div>
    )
}

export default AppWithReducers;
