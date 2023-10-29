import {legacy_createStore,combineReducers} from 'redux'
import {todolistReducer} from "./store/todolist-reducer";
import {tasksReducer} from "./store/tasks-reducer";




 const rootReducer = combineReducers({
     todolists:todolistReducer,
     tasks:tasksReducer
 })

// type AppRootState = {
//     todolists:Array<TodoListsType>
//     tasks:TasksStateType
// } пример типизация создания руками

export type AppRootState = ReturnType<typeof rootReducer>
// в этом случае redux сам создает тип в ходе анализа
export const store = legacy_createStore(rootReducer);


// @ts-ignore
window.store= store;