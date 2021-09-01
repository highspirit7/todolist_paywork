import { CREATE_TODO, GET_TODOS, REMOVE_TODO, TOGGLE_TODO } from "../types";
import { ActionRequest } from "store/actions/todos";

import { ITodoList, ITodoItem } from "types";

const INITIAL_STATE: ITodoList = {
  todoList: [],
};

const todos = (
  state: ITodoList = INITIAL_STATE,
  action: ActionRequest,
): ITodoList => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        todoList: [...state.todoList, action.payload.data],
      };
    case GET_TODOS:
      return {
        todoList: action.payload.data.todoList,
      };
    case REMOVE_TODO:
      const stateAfterRemoval = state.todoList.filter(
        (todoItem: ITodoItem) => todoItem.id !== action.payload.data,
      );
      return {
        todoList: [...stateAfterRemoval],
      };
    case TOGGLE_TODO:
      const stateAfterToggle = state.todoList.map((todoItem: ITodoItem) => {
        if (action.payload.data === todoItem.id) {
          todoItem.isCheck = !todoItem.isCheck;
        }

        return todoItem;
      });
      return {
        todoList: [...stateAfterToggle],
      };
    default:
      return state;
  }
};

export default todos;
