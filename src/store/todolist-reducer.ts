import {FilterValueType, TodoListsType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
   type:'REMOVE-TODOLIST'
   id:string
}
export type AddTodolistActionType ={
    type:'ADD-TODOLIST'
    title:string,
    todolistId:string
}
export type ChangeTodolistTitleActionType={
    type:'CHANGE-TODOLIST-TITLE'
    id:string,
    title:string
}
export type ChangeTodolistFilterActionType = {
    type:'CHANGE-TODOLIST-FILTER'
    id:string
    filter:FilterValueType
}

export type ActionsTypes = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType|ChangeTodolistFilterActionType

export const todolistReducer = (state: Array<TodoListsType>, action: ActionsTypes):Array<TodoListsType> => {
  switch (action.type) {
      case 'REMOVE-TODOLIST': {
        return state.filter(tl => tl.id != action.id)
      }
      case 'ADD-TODOLIST':{
          return [...state,{
              id: action.todolistId,
              title:action.title,
              filter:'all'
          }]
      }
      case 'CHANGE-TODOLIST-TITLE':{
          const todoList = state.find(tl => tl.id === action.id);
          if (todoList) {
              todoList.title =action.title;
          }
         return [...state]
      }
      case 'CHANGE-TODOLIST-FILTER':{
          const todoList = state.find(tl => tl.id === action.id);
          if (todoList) {
              todoList.filter =action.filter;
          }
          return [...state]
      }
        default:
            throw new Error("Error action")
    }
}
export const removeTodolistAC = (todolistID:string):RemoveTodolistActionType=>{
    return {type:'REMOVE-TODOLIST',id:todolistID}
}
export const addTodolistAC = (title:string):AddTodolistActionType=> {
    return {type: 'ADD-TODOLIST', title:title,todolistId:v1()}
}
export const changeTodolistAC = (id:string, title:string):ChangeTodolistTitleActionType=> {
    return {type: 'CHANGE-TODOLIST-TITLE',id:id, title:title}
}
export const changeTodolistFilterAC = (id:string, filter:FilterValueType):ChangeTodolistFilterActionType=> {
    return {type: 'CHANGE-TODOLIST-FILTER',id:id, filter:filter}
}