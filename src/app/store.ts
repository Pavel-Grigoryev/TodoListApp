import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TodolistActionsType, todoListReducer} from "../features/Todolists/todolist-reducer";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {TasksActionsType, tasksReducer} from "../features/Todolists/tasks-reducer";
import {AppActionsType, appReducer} from "./app-reducer";
import {AuthActionsType, authReducer} from "../features/Login/auth-reducer";



const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todoListReducer,
    app: appReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

//Custom hooks

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

//Types

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionTypes>

export type ActionTypes = TodolistActionsType | TasksActionsType | AppActionsType | AuthActionsType

type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, ActionTypes>

//@ts-ignore
window.store = store;