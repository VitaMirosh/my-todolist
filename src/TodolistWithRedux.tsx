import React, {FC, memo, useCallback} from 'react';
import {Button, IconButton, Paper} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {AddItemForm} from "./AddItemForm";

import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store";
import {TaskType} from "./Todolist";
import {addTaskAC} from "./store/tasks-reducer";
import {changeTodolistAC, changeTodolistFilterAC, removeTodolistAC} from "./store/todolist-reducer";
import {TodoListsType} from "./AppWithRedux";
import {TaskWithRedux} from "./TaskWithRedux";

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

    // const removeTask = useCallback((taskId: string) => dispatch(removeTaskAC(taskId, id)), [])
    // const changeCheckBox = useCallback((taskId: string, status: boolean) => {
    //     dispatch(changeTaskStatusAC(taskId, status, id))
    // }, [])
    // const changeTaskTitle = useCallback((taskId: string, newValue: string) => {
    //     dispatch(changeTaskTitleAC(taskId, newValue, id))
    // }, [])
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
                            return <TaskWithRedux
                                key={t.id}
                                task={t}
                                todolistId={id}
                            />
                        })}

                </ul>
                <div style={{paddingTop: "10px"}}>
                    <ButtonMemo
                        variant={filter === 'all' ? 'outlined' : 'text'}
                        onClick={onAllClickHandler}
                        color={'primary'}
                        title={'All'}
                    />
                    <ButtonMemo
                        variant={filter === 'active' ? 'outlined' : 'text'}
                        onClick={onActiveClickHandler}
                        color={'inherit'}
                        title={'Active'}
                    />
                    <ButtonMemo
                        variant={filter === 'completed' ? 'outlined' : 'text'}
                        onClick={onCompletedClickHandler}
                        color={'secondary'}
                        title={'Completed'}
                    />
                </div>
            </div>
        </Paper>
    )
})

type ButtonMemoPropsType = {
    title: string,
    color: 'inherit' | 'primary' | 'secondary' | 'default'
    variant: 'text' | 'outlined' | 'contained',
    onClick: () => void
}

const ButtonMemo = memo((props: ButtonMemoPropsType) => {
    console.log('Button')
    return (
        <Button
            variant={props.variant}
            onClick={props.onClick}
            color={props.color}>{props.title}
        </Button>
    )
})
export default TodolistWithRedux;