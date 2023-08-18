import {addTodolistAC, todolistReducer} from "./todolist-reducer";
import {tasksReducer} from "./tasks-reducer";
import {TasksStateType, TodoListsType} from "../App";
test('its should be equals',()=>{

    const startTasksState:TasksStateType={};
    const startTodolistsState:Array<TodoListsType>=[];

    const action = addTodolistAC('new todolist');
    const endTasksState = tasksReducer (startTasksState,action);
    const endTodolistsState = todolistReducer(startTodolistsState,action)

    const keys = Object.keys(endTasksState);
   const idFromTasks = keys[0];
   const idFromTodolists=endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toEqual(action.todolistId)
})

