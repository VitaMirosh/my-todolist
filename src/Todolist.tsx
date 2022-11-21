import React, {useState} from "react";

// import {FilterValueType} from "./App";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}
type PropsTask = {
    title: string,
    task: Array<TaskType>,
    // RemoveTask: ( id:number) => void,
    // changeFilter: (value:FilterValueType) =>void
    // changeTasksFilter:(buttonName:string)=>void
    removeTask: (num: number) => void
}

export const Todolist = (props: PropsTask) => {
    const [filterVelue, setfilterValue] = useState("All")
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
                <input/>
                <button>+</button>
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
                <button onClick={() => buttonOnclick("ALL")}>All</button>
                <button onClick={() => buttonOnclick("ACTIVE")}>Active</button>
                <button onClick={() => buttonOnclick("COMPLETED")}>Completed</button>
            </div>
        </div>
    )
}


