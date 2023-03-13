import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './Todolist.module.css'
// import {FilterValueType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}
export type PropsTask = {
    title: string,
    task: Array<TaskType>,
    // RemoveTask: ( id:number) => void,
    // changeFilter: (value:FilterValueType) =>void
    // changeTasksFilter:(buttonName:string)=>void
    removeTask: (num: string) => void,
    addTask: (title: string) => void,
    changeCheckBox: (taskID: string, newIsDone: boolean) => void

}

export const Todolist = (props: PropsTask) => {

    const [error, setError] = useState<string | null>('Title is reqired')

    const [filterVelue, setfilterValue] = useState("ALL")
    const [newTaskTitle, setNewTaskTitle] = useState(" ")
    const [buttonName, setButtonName] = useState('all')


    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError('Title is reqired')
        }

    }


    let filteredTasks = props.task
    if (filterVelue === "ACTIVE") {
        filteredTasks = props.task.filter(el => !el.isDone)
    }
    if (filterVelue === "COMPLETED") {
        filteredTasks = props.task.filter(el => el.isDone)
    }
    const buttonOnclick = (buttonNumber: string) => {
        setfilterValue(buttonNumber)
    }
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        setError(null)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle(" ");
        }
    }

    const onAllClickHandler = () => {
        buttonOnclick("ALL")
        setButtonName('ALL')
    }
    const onActiveClickHandler = () => {
        buttonOnclick("ACTIVE")
        setButtonName('ACTIVE')
    }
    const onCompletedClickHandler = () => {
        buttonOnclick("COMPLETED")
        setButtonName('COMPLETED')

    }
    const changeCheckBoxHundler = (taskID: string, newIsDone: boolean) => {
        props.changeCheckBox(taskID ,newIsDone)
    }

    return (
        <div>
            {/*//     <h3>{props.title}</h3>*/}
            {/*//     <div>*/}
            {/*//         <input/>*/}
            {/*//         <button>+</button>*/}
            {/*//     </div>*/}
            {/*//     <ul>*/}
            {/*//         {props.super.map(el => {*/}
            {/*//             return (*/}
            {/*//                 <li><input type="checkbox" checked={el.isDone}/><span>{el.title}</span>*/}
            {/*//                     <span>{el.title}</span>*/}
            {/*//                     <button onClick={()=>{alert (props.RemoveTask(el.id))  }}>x</button>*/}
            {/*//                 </li>*/}
            {/*//             )*/}
            {/*//*/}
            {/*//         })}*/}
            {/*//     </ul>*/}
            {/*//     <div>*/}
            // {/*<button onClick={()=>{props.changeFilter('all')}}>All</button>*/}
            // {/*<button  onClick={()=>{props.changeFilter('active')}}>Active</button>*/}
            // {/*<button  onClick={()=>{props.changeFilter('completed')}}>Completed</button>*/}
            //
            {/*</div>*/}
            <h3>{props.title}</h3>
            <div>
                <input className={error ? s.error : ''}
                       value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={s.errorMessage}>{error}</div>}
            </div>
            <ul>
                {
                    filteredTasks.map((el) => {

                        return <li key={el.id} className={el.isDone ? s.isDoneStyle : ''}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone} onChange={(event)=>changeCheckBoxHundler(el.id,event.currentTarget.checked)}/>
                            <span>{el.title}</span></li>
                    })}


                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button className={buttonName === 'ALL' ? s.activeFilter : ''} onClick={onAllClickHandler}>All</button>
                <button className={buttonName === 'ACTIVE' ? s.activeFilter : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={buttonName === 'COMPLETED' ? s.activeFilter : ''}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    )
}



