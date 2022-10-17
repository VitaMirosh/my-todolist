import React, {useState} from 'react';
import './App.css';
import { TaskType, Todolist} from "./Todolist";

export type FilterValueType = "all"|"completed"|'active';

function App() {
    let [tasks1, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: false},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: true},
    ])
    let [filter, setFilter] = useState<FilterValueType>("all")


    function RemoveTask(id: number) {
        let filterTasks = tasks1.filter(el => el.id !== id)
        setTasks(filterTasks)
    }
function changeFilter(value:FilterValueType){
      setFilter(value)  ;
}
    let tasksForTodolist = tasks1;
    if (filter === "completed") {
        tasksForTodolist = tasks1.filter(el => el.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks1.filter(el => el.isDone === false)
    }
    return (
        <div className="App">
            <Todolist title={'How are you?'}
                      super={tasksForTodolist}
                      RemoveTask={RemoveTask}
                      changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
