import React, {ChangeEvent, FC, useCallback} from 'react';
import {Button, Checkbox, IconButton, Paper} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete, Favorite, FavoriteBorder} from "@material-ui/icons";
import {AddItemForm} from "./AddItemForm";
import s from "./Todolist.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store";
import {TaskType} from "./Todolist";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./store/tasks-reducer";
import {changeTodolistAC, changeTodolistFilterAC, removeTodolistAC} from "./store/todolist-reducer";
import {TodoListsType} from "./AppWithRedux";
import {Task} from "./Task";

export type TodolistWithReduxPropsType = {
    todolist: TodoListsType
}
const TodolistWithRedux: FC<TodolistWithReduxPropsType> = React.memo(({todolist}) => {
    console.log('Todulist')
    const {id, title, filter} = todolist
    let task = useSelector<AppRootState, Array<TaskType>>(state => state.tasks[id])

    const dispatch = useDispatch()


    const maxLenghtMessage: number = 15

    if (filter === "active") {
        task = task.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        task = task.filter(t => t.isDone);
    }

    const removeTodoListHandler = useCallback(() => {
        dispatch(removeTodolistAC(id))
    }, [dispatch])
    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(title, id))
    }, [dispatch]);
    const changeTodoListTitle = useCallback((title: string) => {
        dispatch(changeTodolistAC(id, title))
    }, [dispatch])


    const onAllClickHandler = useCallback(() => {
        dispatch(changeTodolistFilterAC(id, "all"))
    }, [dispatch])
    const onActiveClickHandler = useCallback(() => {
        dispatch(changeTodolistFilterAC(id, "active"))
    }, [dispatch])
    const onCompletedClickHandler = useCallback(() => {
        dispatch(changeTodolistFilterAC(id, "completed"))
    }, [dispatch])

    const removeTask = useCallback((taskId: string) => dispatch(removeTaskAC(taskId, id)), [])
    const changeCheckBox = useCallback((taskId: string, status: boolean) => {
        dispatch(changeTaskStatusAC(taskId, status, id))
    }, [])
    const changeTaskTitle = useCallback((taskId: string, newValue: string) => {
        dispatch(changeTaskTitleAC(taskId, newValue, id))
    }, [])
    return (
        <Paper>
            <div>
                <h3>
                    <EditableSpan title={title} onChange={changeTodoListTitle}/>
                    <IconButton
                        color={"secondary"}
                        onClick={removeTodoListHandler}>
                        <Delete/>
                    </IconButton>
                </h3>
                <AddItemForm addItem={addTask} maxLenghtMessage={maxLenghtMessage}/>
                <ul>
                    {
                        task.map((t) => {
                            return <Task
                                key={t.id}
                                task={t}
                                removeTask={removeTask}
                                changeCheckBox={changeCheckBox}
                                changeTaskTitle={changeTaskTitle}
                            />
                        })}

                </ul>
                <div>
                    <Button
                        variant={filter === 'all' ? 'contained' : 'text'} size={"small"}
                        onClick={onAllClickHandler}>All</Button>
                    <Button
                        color={'primary'}
                        variant={filter === 'active' ? 'contained' : 'text'}
                        onClick={onActiveClickHandler}>Active</Button>
                    <Button color={'secondary'}
                            variant={filter === 'completed' ? 'contained' : 'text'}
                            onClick={onCompletedClickHandler}>Completed</Button>
                </div>
            </div>
        </Paper>
    )
})


export default TodolistWithRedux;