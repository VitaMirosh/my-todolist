
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodolistAC,
    changeTodolistAC,
    changeTodolistFilterAC,
    removeTodolistAC,

} from "./store/todolist-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./store/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store";

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

    const dispatch = useDispatch()
    const todolists = useSelector<AppRootState, Array<TodoListsType>>(state => state.todolists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)


    const changeCheckBox = (todoListId: string, taskID: string, newIsDone: boolean) => {
        dispatch(changeTaskStatusAC(taskID, newIsDone, todoListId))
    }


    const removeTask = (todoListId: string, taskId: string) => {
        dispatch(removeTaskAC(taskId, todoListId))

    }

    function addTask(todoListId: string, title: string) {
        dispatch(addTaskAC(title, todoListId))

    }


    const changeFilter = (todoListId: string, valueFilter: FilterValueType) => {
        dispatch(changeTodolistFilterAC(todoListId, valueFilter))

    }

    const removeTodoList = (todoListId: string) => {
        const action = removeTodolistAC(todoListId)
        dispatch(action)
    }

    function addTodoList(title: string) {
        const action = addTodolistAC(title)
        dispatch(action)
    }


    const changeTaskTitle = (id: string, newTitle: string, todoListId: string) => {
        dispatch(changeTaskTitleAC(id, newTitle, todoListId));


    }
    const changeTodoListTitle = (todoListId: string, newTitle: string) => {
        const action = changeTodolistAC(todoListId, newTitle)
        dispatch(action)

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
                    {todolists.map(el => {
                        let filteredTasks = tasks[el.id];
                        if (el.filter === "active") {
                            filteredTasks = tasks[el.id].filter(t => !t.isDone);
                        }
                        if (el.filter === "completed") {
                            filteredTasks = tasks[el.id].filter(t => t.isDone);
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

export default AppWithRedux;
