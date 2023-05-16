import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Todolist.module.css";

export type AddItemFormPropsType = {
    addItem: ( title: string) => void,

}

export function AddItemForm(props: AddItemFormPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState(" ")
    const [error, setError] = useState<string | null>('Title is reqired')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        setError(null)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addItem( newTaskTitle.trim());
            setNewTaskTitle(" ");
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem( newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError('Title is reqired')
        }

    }
    return <div>
        <input className={error ? s.error : ''}
               value={newTaskTitle}
               onChange={onNewTitleChangeHandler}
               onKeyDown={onKeyPressHandler}
        />
        <button onClick={addTask}>+</button>
        {error && <div className={s.errorMessage}>{error}</div>}
    </div>
}