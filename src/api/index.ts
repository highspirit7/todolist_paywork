import { ITodoItem, ITodoList } from "types";

const initialTodos: ITodoList = {
  todoList: [],
};

// 로컬스토리지 key
const key = "todo";

/**
 * @param todoItem
 * @returns msg와 todoItem. 로컬스토리지도 업데이트 하면서 리덕스 리듀서에서 해당 todoItem을 받아 스토어를 업데이트하기 위함.
 */
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

/**
 * @returns 로컬스토리지에 todos 키값으로 저장된 데이터
 */
export function getTodos(): ITodoList {
  const todos = localStorage[key] ? JSON.parse(localStorage[key]) : [];

  return todos;
}

/**
 * @param removalId 삭제 대상 투두 아이템 id
 * @returns 삭제 대상 투두 아이템 id와 msg 반환. 로컬스토리지에서 해당 아이템을 검색해 삭제하는 api 투두 아이템 id도 리턴 값으로 넘겨주어 리덕스 리듀서도 스토어에서 해당 아이템
 * 삭제할 수 있도록 하였습니다.
 */
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

/**
 * @param toggleId 토글 대상 투두 아이템 id
 * @returns 토글 대상 투두 아이템 id와 msg 반환. 로컬스토리지에서 해당 아이템을 검색해 토글하는 api 투두 아이템 id도 리턴 값으로 넘겨주어 리덕스 리듀서도 스토어에서 해당 아이템을 토글할 수 있도록 하였습니다.
 */
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
