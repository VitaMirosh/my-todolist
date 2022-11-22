// import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";

// export type FilterValueType = "all"|"completed"|'active';

function App() {
    // let [tasks1, setTasks] = useState<Array<TaskType>>(
    let [task, setTask] = useState(
        [
            {id: v1(), title: "HTML&CSS", isDone: false},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Redux", isDone: true},
        ]
    )
    const removeTask = (num: string) => {
        setTask(task.filter((el) => el.id !== num))
        console.log(num)
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...task];
        setTask(newTasks)
    }

    // const task2 = [
    //     {id: 1, title: "Hello world", isDone: false},
    //     {id: 2, title: "I am happy", isDone: true},
    //     {id: 3, title: "Yo", isDone: false},
    //
    // ]
    // )
    // let [filter, setFilter] = useState<FilterValueType>("all")


//     function RemoveTask(id: number) {
//         let filterTasks = tasks1.filter(el => el.id !== id)
//         setTasks(filterTasks)
//     }
// function changeFilter(value:FilterValueType){
//       setFilter(value)  ;
// }
//     let tasksForTodolist = tasks1;
//     if (filter === "completed") {
//         tasksForTodolist = tasks1.filter(el => el.isDone === true)
//     }
//     if (filter === "active") {
//         tasksForTodolist = tasks1.filter(el => el.isDone === false)


//     }
    return (
        <div className="App">
            {/*<Todolist title={'How are you?'}*/}
            {/*          super={tasksForTodolist}*/}
            {/*          RemoveTask={RemoveTask}*/}
            {/*          changeFilter={changeFilter}*/}
            {/*/>*/}
            <Todolist title="What to learn"
                      task={task}
                      removeTask={removeTask}
                      addTask={addTask}
            />
            {/*<Todolist title="Songs" tasks={task2}/>*/}

        </div>
    )
}

export default App;
