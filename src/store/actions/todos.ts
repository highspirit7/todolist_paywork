import { CREATE_TODO, GET_TODOS, REMOVE_TODO, TOGGLE_TODO } from "../types";

import { ITodosResponse, ITodoItem } from "types";

// 액션에서 투두 데이터 다 페이로드로 넘겨서 리듀서에서 스토어 조작하도록해야
export const createTodo = (todoItem: ITodoItem) => ({
  type: CREATE_TODO,
  payload: { data: todoItem },
});

export const getTodos = (response: ITodosResponse) => ({
  type: GET_TODOS,
  payload: { data: response },
});

export const removeTodo = (todoId: string) => ({
  type: REMOVE_TODO,
  payload: { data: todoId },
});

export const toggleTodo = (todoId: string) => ({
  type: TOGGLE_TODO,
  payload: { data: todoId },
});

export type ActionRequest =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof getTodos>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;
