import React, {ChangeEvent, memo} from 'react';
import {TaskType} from "./Todolist";
import s from "./Todolist.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete, Favorite, FavoriteBorder} from "@material-ui/icons";
import {EditableSpan} from "./EditableSpan";

type TaskPropsType={
    task:TaskType,
    removeTask: (taskId: string) => void,
    changeCheckBox: ( taskID: string, newIsDone: boolean) => void,
    changeTaskTitle: (id: string, newTitle: string) => void
}
 const Task = memo((props:TaskPropsType) => {

    const onClickHandlerRemoveTask = () => props.removeTask(props.task.id)
    const onChangeHandlerCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        props.changeCheckBox(props.task.id, newIsDoneValue)
    }
    const onChangeTitleHandler = (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue);
    }

    return <div className={props.task.isDone ? s.isDoneStyle : ''}>
        <IconButton
            color={"primary"}
            onClick={onClickHandlerRemoveTask}>
            <Delete/>
        </IconButton>
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} checked={props.task.isDone}
                  onChange={onChangeHandlerCheckBox}/>
        <EditableSpan title={props.task.title}
                      onChange={onChangeTitleHandler}/>

    </div>
},);

