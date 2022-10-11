import React from "react";

type Puper = {
    id: number,
    title: string,
    isDone: boolean,
}
type title1 = {
    title?: string,
    super: Array<Puper>,
}

export const Todolist = (props: title1) => {
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
                        <li><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>
                    )
                })}
                {/*<li><input type="checkbox" checked={props.super[0].isDone}/><span>{props.super[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.super[1].isDone}/><span>{props.super[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.super[2].isDone}/><span>{props.super[2].title}</span></li>*/}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <Star/>
        </div>
    )
}

 export function Star() {
    return (
        <div>
            Vita super star
        </div>
    )
}