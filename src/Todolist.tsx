import React, {ChangeEvent, useState} from "react";
import s from './Todolist.module.css'
import {FilterValueType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}
export type PropsTask = {
    todoListId: string,
    title: string,
    task: Array<TaskType>,
    removeTask: (todoListId: string, taskId: string) => void,
    addTask: (todoListId: string, title: string) => void,
    changeCheckBox: (todoListId: string, taskID: string, newIsDone: boolean) => void
    changeTaskTitle: (id:string,newTitle: string,todoListId: string) => void
    filter: FilterValueType
    changeFilter: (todoListId: string, valueFilter: FilterValueType) => void
    removeTodoList: (todoListId: string) => void
    changeTodoListTitle:(todoListId: string,newTitle:string)=>void
}

export const Todolist = (props: PropsTask) => {

    const [buttonName, setButtonName] = useState('all')


    const onAllClickHandler = () => {
        props.changeFilter(props.todoListId, "all")
        setButtonName('ALL')
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.todoListId, "active")
        setButtonName('ACTIVE')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.todoListId, "completed")
        setButtonName('COMPLETED')

    }
    const changeCheckBoxHundler = (todoListId: string, taskID: string, newIsDone: boolean) => {
        props.changeCheckBox(todoListId, taskID, newIsDone)
    }
    const removeTodoListHandler = () => {
        props.removeTodoList(props.todoListId)
    }
    const addTask = (title: string) => {
        props.addTask(props.todoListId, title)
    }
const changeTodoListTitle=(newTitle:string)=>{
      props.changeTodoListTitle(props.todoListId,newTitle) ;
}

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} onChange={changeTodoListTitle}/>

                <button onClick={removeTodoListHandler}>++</button>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {
                    props.task.map((el) => {
                        const onChangeTitleHandler = (newValue: string) => {
                          props.changeTaskTitle(el.id,newValue,props.todoListId);

                        }
                        return <li key={el.id} className={el.isDone ? s.isDoneStyle : ''}>
                            <button onClick={() => props.removeTask(props.todoListId, el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}
                                   onChange={(event) => changeCheckBoxHundler(props.todoListId, el.id, event.currentTarget.checked)}/>
                            <EditableSpan title={el.title}
                                          onChange={onChangeTitleHandler}/>
                        </li>

                    })}


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
