import { ITodoItem, ITodoList } from "types";

const initialTodos: ITodoList = {
  todoList: [],
};

// 로컬스토리지 key
const key = "todo";

export function createTodoItem(todoItem: ITodoItem): {
  msg: string;
  todoItem: ITodoItem;
} {
  const todos: ITodoList = localStorage[key]
    ? JSON.parse(localStorage[key])
    : initialTodos;

  todos.todoList.push(todoItem);

  localStorage.setItem(key, JSON.stringify(todos));

  return { msg: "투두아이템이 생성되었습니다", todoItem };
}

export function getTodos(): ITodoList {
  const todos = localStorage[key] ? JSON.parse(localStorage[key]) : [];

  return todos;
}

export function removeTodoItem(removalId: string): {
  msg: string;
  removalId: string;
} {
  let todos = localStorage[key]
    ? JSON.parse(localStorage[key])
    : localStorage[key];

  if (todos && todos.todoList) {
    todos = JSON.parse(localStorage[key]);
    const index = todos.todoList.findIndex(
      (todoItem: ITodoItem) => todoItem.id === removalId,
    );

    if (index > -1) {
      todos.todoList.splice(index, 1);
      console.log(todos);

      localStorage.setItem(key, JSON.stringify(todos));
      return {
        msg: "투두아이템이 삭제되었습니다",
        removalId,
      };
    } else {
      throw "해당하는 투두아이템이 없습니다";
    }
  } else {
    throw "투두 리스트가 존재하지 않습니다";
  }
}

export function toggleTodoItem(toggleId: string): {
  msg: string;
  toggleId: string;
} {
  let todos = localStorage[key]
    ? JSON.parse(localStorage[key])
    : localStorage[key];

  if (todos && todos.todoList) {
    todos = JSON.parse(localStorage[key]);
    const index = todos.todoList.findIndex(
      (todoItem: ITodoItem) => todoItem.id === toggleId,
    );

    if (index > -1) {
      todos.todoList[index].isCheck = !todos.todoList[index].isCheck;
      localStorage.setItem(key, JSON.stringify(todos));
      return {
        msg: "투두아이템이 토글되었습니다",
        toggleId,
      };
    } else {
      throw "해당하는 투두아이템이 없습니다";
    }
  } else {
    throw "투두 리스트가 존재하지 않습니다";
  }
}
