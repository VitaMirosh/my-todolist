import React, {ChangeEvent, memo} from 'react';
import {TaskType} from "./Todolist";
import s from "./Todolist.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete, Favorite, FavoriteBorder} from "@material-ui/icons";
import {EditableSpan} from "./EditableSpan";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./store/tasks-reducer";

type TaskPropsType={
    task:TaskType,
    todolistId:string

}
export const TaskWithRedux = memo(({task,todolistId}:TaskPropsType) => {
    console.log('Task')

    const dispatch=useDispatch()
    const{id,title,isDone}=task

    const onClickHandlerRemoveTask = () => dispatch(removeTaskAC(id,todolistId))
    const onChangeHandlerCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC(id, newIsDoneValue, todolistId))
    }
    const onChangeTitleHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(id, newValue, todolistId))
    }

    return <div className={isDone ? s.isDoneStyle : ''}>
        <IconButton
            color={"primary"}
            onClick={onClickHandlerRemoveTask}>
            <Delete/>
        </IconButton>
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} checked={isDone}
                  onChange={onChangeHandlerCheckBox}/>
        <EditableSpan title={title}
                      onChange={onChangeTitleHandler}/>

    </div>
},);

