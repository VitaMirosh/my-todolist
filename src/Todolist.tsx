import React from "react";
import {FilterValueType} from "./App";

 export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}
type title1 = {
    title?: string,
    super: Array<TaskType>,
    RemoveTask: ( id:number) => void,
    changeFilter: (value:FilterValueType) =>void
}

export const Todolist = (props: title1) =>{
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.super.map(el => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/><span>{el.title}</span>
                            <span>{el.title}</span>
                            <button onClick={()=>{alert (props.RemoveTask(el.id))  }}>x</button>
                        </li>
                    )

                })}
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter('all')}}>All</button>
                <button  onClick={()=>{props.changeFilter('active')}}>Active</button>
                <button  onClick={()=>{props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>
    )
}


