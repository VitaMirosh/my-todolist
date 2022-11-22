import React, {ChangeEvent, KeyboardEvent, useState} from "react";

// import {FilterValueType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}
type PropsTask = {
    title: string,
    task: Array<TaskType>,
    // RemoveTask: ( id:number) => void,
    // changeFilter: (value:FilterValueType) =>void
    // changeTasksFilter:(buttonName:string)=>void
    removeTask: (num: string) => void,
    addTask: (title: string) => void,
}

export const Todolist = (props: PropsTask) => {
    const [filterVelue, setfilterValue] = useState("ALL")
    const [newTaskTitle, setNewTaskTitle] = useState(" ")
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
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }
    const onAllClickHandler = () => {
        buttonOnclick("ALL")
    }
    const onActiveClickHandler = () => {
        buttonOnclick("ACTIVE")
    }
    const onCompletedClickHandler = () => {
        buttonOnclick("COMPLETED")
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
                <input value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {filteredTasks.map((el) =>
                    <li key={el.id}>
                        <button onClick={() => props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span></li>)
                }


                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}


