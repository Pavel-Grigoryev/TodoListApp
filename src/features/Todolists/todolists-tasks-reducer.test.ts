import {addTodolistTC, TodoListDomainType} from "./todolist-reducer";
import {TasksStateType} from "./tasks-reducer";
import {tasksReducer, todolistReducer} from "./index";


test('ids should be equals', () => {
    const startTasksState: TasksStateType = {}
    const startTodolistsState: Array<TodoListDomainType> = []

    const action = addTodolistTC.fulfilled({todolist: {id: 'todolistId1', title: "What to learn", addedDate: "", order: 0}} , 'requestId', "What to learn" )

    const endTasksState = tasksReducer(startTasksState, action)

    const endTodolistsState = todolistReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id

    expect(idFromTasks).toBe(action.payload.todolist.id)
    expect(idFromTodolists).toBe(action.payload.todolist.id)
})