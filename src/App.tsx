import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Star, Todolist} from "./Todolist";
import {Accordion} from "./Accordion";
import {Reting} from "./Reting";

function App() {
    const tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true},
    { id: 2, title:"JS",isDone:true},
    { id: 3, title:"ReactJS",isDone:false}
        ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true},
        { id: 2, title: "I am Happy", isDone: false},
        { id: 3, title: "Yo", isDone: false}
    ]
  return (
      <div className="App">


          <Todolist title={'How are you?'} super={tasks1}/>
          <Todolist super={tasks2}/>
          <Star/>
          <Reting value={1}/>
          <Accordion name={"Hello word"}/>
          <Accordion name={"Menu according"}/>
          <Reting value={5}/>
      </div>
  );
}

export default App;
