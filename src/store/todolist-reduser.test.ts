import {v1} from "uuid";
import {FilterValueType, TodoListsType} from "../App";
import {
    addTodolistAC,
    changeTodolistAC, changeTodolistFilterAC,
    removeTodolistAC,
    todolistReducer
} from "./todolist-reducer";

test('correct  todolist should be removed', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();


    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    // const endState = todolistReducer(startState,{type:'REMOVE-TODOLIST',id:todoListId1})


    const endState = todolistReducer(startState,removeTodolistAC(todoListId1))
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todoListId2)
})


test('correct  todolist should be added', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    let newTodoListTitle = "New Todolist";

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    // const endState = todolistReducer(startState,{
    //     type:'ADD-TODOLIST',
    //     title:newTodoListTitle
    // })

    const endState = todolistReducer(startState,addTodolistAC(newTodoListTitle))
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodoListTitle);
    expect(endState[2].filter).toBe("all")
})


test('correct  todolist should change its name', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    let newTodoListTitle = "New Todolist";

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]

    const action = changeTodolistAC (todoListId2,newTodoListTitle)

    const endState = todolistReducer(startState,action)
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodoListTitle)
})

test('correct  filter of todolist should be changed', () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    let newFilter: FilterValueType = 'completed';

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What to learn', filter: 'all'},
        {id: todoListId2, title: 'What to buy', filter: 'all'}
    ]
    //
    // const action:ChangeTodolistFilterActionType = {
    //     type:'CHANGE-TODOLIST-FILTER',
    //     id:todoListId2,
    //     filter:newFilter
    // };

    const action = changeTodolistFilterAC (todoListId2,newFilter)
    const endState = todolistReducer(startState,action)

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter)
})