import React  from "react";


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}
// export type PropsTask = {
//     todoListId: string,
//     title: string,
//     task: Array<TaskType>,
//     removeTask: (todoListId: string, taskId: string) => void,
//     addTask: (todoListId: string, title: string) => void,
//     changeCheckBox: (todoListId: string, taskID: string, newIsDone: boolean) => void
//     changeTaskTitle: (id: string, newTitle: string, todoListId: string) => void
//     filter: FilterValueType
//     changeFilter: (todoListId: string, valueFilter: FilterValueType) => void
//     removeTodoList: (todoListId: string) => void
//     changeTodoListTitle: (todoListId: string, newTitle: string) => void
// }

//  const Todolist = (props: PropsTask) => {
//
//     const [buttonName, setButtonName] = useState('all')
//     const maxLenghtMessage: number = 15
//
//     const onAllClickHandler = () => {
//         props.changeFilter(props.todoListId, "all")
//         setButtonName('ALL')
//     }
//     const onActiveClickHandler = () => {
//         props.changeFilter(props.todoListId, "active")
//         setButtonName('ACTIVE')
//     }
//     const onCompletedClickHandler = () => {
//         props.changeFilter(props.todoListId, "completed")
//         setButtonName('COMPLETED')
//
//     }
//     const changeCheckBoxHundler = (todoListId: string, taskID: string, newIsDone: boolean) => {
//         props.changeCheckBox(todoListId, taskID, newIsDone)
//     }
//     const removeTodoListHandler = () => {
//         props.removeTodoList(props.todoListId)
//     }
//     const addTask = (title: string) => {
//         props.addTask(props.todoListId, title)
//     }
//     const changeTodoListTitle = (newTitle: string) => {
//         props.changeTodoListTitle(props.todoListId, newTitle);
//     }
//
//     return (
//         <Paper>
//         <div>
//             <h3>
//                 <EditableSpan title={props.title} onChange={changeTodoListTitle}/>
//                 <IconButton
//                     color = {"secondary"}
//                     onClick={removeTodoListHandler}>
//                     <Delete/>
//                 </IconButton>
//             </h3>
//             <AddItemForm addItem={addTask} maxLenghtMessage={maxLenghtMessage}/>
//             <ul>
//                 {
//                     props.task.map((el) => {
//                         const onChangeTitleHandler = (newValue: string) => {
//                             props.changeTaskTitle(el.id, newValue, props.todoListId);
//
//                         }
//                         return <div key={el.id} className={el.isDone ? s.isDoneStyle : ''}>
//                             <IconButton
//                                 color = {"primary"}
//                                 onClick={() => props.removeTask(props.todoListId, el.id)}>
//                                 <Delete/>
//                             </IconButton>
//                             <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>} checked={el.isDone}
//                                       onChange={(event) => changeCheckBoxHundler(props.todoListId, el.id, event.currentTarget.checked)}/>
//                             <EditableSpan title={el.title}
//                                           onChange={onChangeTitleHandler}/>
//
//                         </div>
//
//                     })}
//
//             </ul>
//             <div>
//                 <Button
//                     variant={buttonName === 'ALL' ? 'contained' : 'text'} size={"small"}
//                     onClick={onAllClickHandler}>All</Button>
//                 <Button
//                     color={'primary'}
//                     variant={buttonName === 'ACTIVE' ? 'contained' : 'text'}
//                     onClick={onActiveClickHandler}>Active</Button>
//                 <Button color={'secondary'}
//                         variant={buttonName === 'COMPLETED' ? 'contained' : 'text'}
//                         onClick={onCompletedClickHandler}>Completed</Button>
//             </div>
//         </div>
//         </Paper>
//     )
// }
