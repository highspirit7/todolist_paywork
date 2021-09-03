import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
} from "../types";

import { ITodoItem } from "types";

export const createTodoRequest = (todoItem: ITodoItem) => ({
  type: CREATE_TODO_REQUEST,
  payload: { data: todoItem },
});
export const createTodoSuccess = (data: { todoItem: ITodoItem; msg: any }) => ({
  type: CREATE_TODO_SUCCESS,
  payload: { data },
});
export const createTodoFailure = (msg: any) => ({
  type: CREATE_TODO_FAILURE,
  payload: { data: msg },
});

export const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST,
});
export const getTodosSuccess = (todos: ITodoItem[]) => ({
  type: GET_TODOS_SUCCESS,
  payload: { data: todos },
});
export const getTodosFailure = (msg: any) => ({
  type: GET_TODOS_FAILURE,
  payload: { data: msg },
});

export const removeTodoRequest = (todoId: string) => ({
  type: REMOVE_TODO_REQUEST,
  payload: { data: todoId },
});
export const removeTodoSuccess = (data: { todoId: string; msg: string }) => ({
  type: REMOVE_TODO_SUCCESS,
  payload: { data },
});
export const removeTodoFailure = (msg: any) => ({
  type: REMOVE_TODO_FAILURE,
  payload: { data: msg },
});

export const toggleTodoRequest = (todoId: string) => ({
  type: TOGGLE_TODO_REQUEST,
  payload: { data: todoId },
});
export const toggleTodoSuccess = (data: { todoId: string; msg: string }) => ({
  type: TOGGLE_TODO_SUCCESS,
  payload: { data },
});
export const toggleTodoFailure = (msg: any) => ({
  type: TOGGLE_TODO_FAILURE,
  payload: { data: msg },
});

export type ActionRequest =
  | ReturnType<typeof createTodoRequest>
  | ReturnType<typeof createTodoSuccess>
  | ReturnType<typeof createTodoFailure>
  | ReturnType<typeof getTodosRequest>
  | ReturnType<typeof getTodosSuccess>
  | ReturnType<typeof getTodosFailure>
  | ReturnType<typeof removeTodoRequest>
  | ReturnType<typeof removeTodoSuccess>
  | ReturnType<typeof removeTodoFailure>
  | ReturnType<typeof toggleTodoRequest>
  | ReturnType<typeof toggleTodoSuccess>
  | ReturnType<typeof toggleTodoFailure>;

export type CreateTodoRequestAction = ReturnType<typeof createTodoRequest>;
export type GetTodosRequestAction = ReturnType<typeof getTodosRequest>;
export type RemoveTodoRequestAction = ReturnType<typeof removeTodoRequest>;
export type ToggleTodoRequestAction = ReturnType<typeof toggleTodoRequest>;
