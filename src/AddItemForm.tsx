import {Button, IconButton, TextField} from "@material-ui/core";
import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import s from "./Todolist.module.css";
import {ControlPoint} from "@material-ui/icons";

export type AddItemFormPropsType = {
    addItem: (title: string) => void,
    maxLenghtMessage: number
}

export const AddItemForm: FC<AddItemFormPropsType> = ({
                                                          maxLenghtMessage,
                                                          addItem
                                                      }) => {
    const [newTaskTitle, setNewTaskTitle] = useState(" ")
    const [error, setError] = useState<string | null>('Title is reqired')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        setError(null)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItem(newTaskTitle.trim());
            setNewTaskTitle(" ");
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            addItem(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError('Title is reqired')
        }

    }
    const isUserMessageToLong: boolean = newTaskTitle.length > maxLenghtMessage
    const userMaxLenghtMessage = isUserMessageToLong && <div> Task title is to long</div>

    const isAddBtnDisabled = !newTaskTitle.length || isUserMessageToLong
    return <div>
        {/*<input className={error ? s.error : ''}*/}
        {/*       value={newTaskTitle}*/}
        {/*       placeholder="Please, enter title"*/}
        {/*       onChange={onNewTitleChangeHandler}*/}
        {/*       onKeyDown={onKeyPressHandler}*/}
        {/*/>*/}

        <TextField
                   value={newTaskTitle}
                   variant={'outlined'}
                   label={'Type value'}
                   placeholder="Please, enter title"
                   onChange={onNewTitleChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   error={!!error}
                   helperText={error}
        />
        <IconButton disabled={isAddBtnDisabled} onClick={addTask} color={'primary'}>
            <ControlPoint/>
        </IconButton>
        {userMaxLenghtMessage}

    </div>
}