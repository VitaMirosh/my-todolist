// import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

export type FilterValueType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string,
    title: string,
    filter: FilterValueType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {


    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ])
    let [task, setTask] = useState<TasksStateType>({
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
        setTask({...task, [todoListId]: task[todoListId].map(el => el.id === taskID ? {...el, isDone: newIsDone} : el)})
    }


    const removeTask = (todoListId: string, taskId: string) => {
        setTask({...task, [todoListId]: task[todoListId].filter(el => el.id !== taskId)})

    }

    function addTask(todoListId: string, title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        setTask({...task, [todoListId]: [newTask, ...task[todoListId]]})
    }


    const changeFilter = (todoListId: string, valueFilter: FilterValueType) => {
        setTodoLists(todoLists.map(el => el.id === todoListId ? {...el, filter: valueFilter} : el))
    }

    const removeTodoList = (todoListId: string) => {
        setTodoLists(todoLists.filter(el => el.id !== todoListId))
        delete task[todoListId]
    }

    function addTodoList(title: string) {
        let todoList: TodoListsType = {
            id: v1(),
            filter: 'all',
            title: title
        }
        setTodoLists([...todoLists, todoList])
        setTask({
            ...task, [todoList.id]: []
        })
    }


    const changeTaskTitle = (id: string, newTitle: string, todoListId: string) => {
        let todoListTasks = task[todoListId];
        let tasks = todoListTasks.find(t => t.id === id);
        if (tasks) {
            tasks.title = newTitle;
            setTask({...task});
        }
    }
    const changeTodoListTitle = (todoListId: string, newTitle: string) => {
        const todoList = todoLists.find(tl => tl.id === todoListId);
        if (todoList) {
            todoList.title = newTitle;
            setTodoLists([...todoLists]);
        }
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
                <Grid container style={ {padding:"20px"}}>
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
                                <Todolist
                                    key={el.id}
                                    todoListId={el.id}
                                    title={el.title}
                                    task={filteredTasks}
                                    removeTask={removeTask}
                                    addTask={addTask}
                                    changeCheckBox={changeCheckBox}
                                    changeTaskTitle={changeTaskTitle}
                                    changeTodoListTitle={changeTodoListTitle}
                                    filter={el.filter}
                                    changeFilter={changeFilter}
                                    removeTodoList={removeTodoList}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>

            </Container>

        </div>
    )
}

export default App;
