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
import { ActionRequest } from "store/actions/todos";

import { ITodoItem } from "types";
import { ITodosState } from "../types";

const INITIAL_STATE: ITodosState = {
  todoList: [],
  message: "",
};

const todos = (
  state: ITodosState = INITIAL_STATE,
  action: ActionRequest,
): ITodosState => {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
      return state;
    case CREATE_TODO_SUCCESS:
      state.todoList.push(action.payload.data.todoItem);
      return {
        todoList: [...state.todoList],
        message: action.payload.data.msg,
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        message: action.payload.data,
      };
    case GET_TODOS_REQUEST:
      return state;
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todoList: action.payload.data,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        message: action.payload.data,
      };
    case REMOVE_TODO_REQUEST:
      return state;
    case REMOVE_TODO_SUCCESS:
      const stateAfterRemoval = state.todoList.filter(
        (todoItem: ITodoItem) => todoItem.id !== action.payload.data.todoId,
      );
      return {
        message: action.payload.data.msg,
        todoList: stateAfterRemoval,
      };
    case REMOVE_TODO_FAILURE:
      return {
        ...state,
        message: action.payload.data,
      };
    case TOGGLE_TODO_REQUEST:
      return state;
    case TOGGLE_TODO_SUCCESS:
      const stateAfterToggle = state.todoList.map((todoItem: ITodoItem) => {
        if (action.payload.data.todoId === todoItem.id) {
          todoItem.isCheck = !todoItem.isCheck;
          return todoItem;
        } else return todoItem;
      });
      return {
        message: action.payload.data.msg,
        todoList: stateAfterToggle,
      };
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        message: action.payload.data,
      };
    default:
      return state;
  }
};

export default todos;
