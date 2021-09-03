import { ITodoItem } from "types";

export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST" as const;
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS" as const;
export const CREATE_TODO_FAILURE = "CREATE_TODO_FAILURE" as const;

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST" as const;
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS" as const;
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE" as const;

export const REMOVE_TODO_REQUEST = "REMOVE_TODO_REQUEST" as const;
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS" as const;
export const REMOVE_TODO_FAILURE = "REMOVE_TODO_FAILURE" as const;

export const TOGGLE_TODO_REQUEST = "TOGGLE_TODO_REQUEST" as const;
export const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS" as const;
export const TOGGLE_TODO_FAILURE = "TOGGLE_TODO_FAILURE" as const;

export interface ITodosState {
  todoList: ITodoItem[];
  message: any;
}
