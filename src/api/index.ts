import { ITodoItem, ITodoList, ITodosResponse } from "types";

interface Message {
  msg: string;
}

const initialTodos: ITodoList = {
  todoList: [],
};

/**
 * params1 : 투두 아이템 객체 하나
 * params2 : 투두 아이템 생성용 url('todo', '/todo')
 */
export function createTodoItem(
  todoItem: ITodoItem,
  url: string,
): Message | undefined {
  const key = url.includes("/") ? url.split("/")[1] : url.split("/")[0];

  if (key === "todo" && url.split("/").length < 3) {
    const todos: ITodoList = localStorage[key]
      ? JSON.parse(localStorage[key])
      : initialTodos;

    todos.todoList.push(todoItem);

    localStorage.setItem(key, JSON.stringify(todos));

    return { msg: "투두아이템이 생성되었습니다" };
  } else {
    return { msg: "유효한 URL 요청이 아닙니다" };
  }
}

export function getTodos(url: string): ITodosResponse {
  const key = url.includes("/") ? url.split("/")[1] : url.split("/")[0];

  if (key === "todo" && url.split("/").length < 3) {
    const todos = localStorage[key]
      ? JSON.parse(localStorage[key])
      : localStorage[key];

    return {
      todoList: todos,
      msg: "투두 리스트를 성공적으로 전송받았습니다",
    };
  } else {
    return { todoList: [], msg: "유효한 URL 요청이 아닙니다" };
  }
}

export function removeTodoItem(url: string): Message {
  // url 핸들링, id 추출
  // url 유효하지 않은 경우
  // 해당 id 아이템 없는 경우
  // 삭제된 경우

  const key = url.includes("/") ? url.split("/")[1] : url.split("/")[0];

  if (key === "todo" && url.split("/").length === 3) {
    const removalId = url.split("/")[2];
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
        };
      } else {
        return {
          msg: "삭제할 수 있는 투두아이템이 없습니다",
        };
      }
    } else {
      return {
        msg: "투두 리스트가 존재하지 않습니다",
      };
    }
  } else {
    return { msg: "유효한 URL 요청이 아닙니다" };
  }
}

export function toggleTodoItem(url: string): Message {
  // url 핸들링, id 추출
  // url 유효하지 않은 경우
  // 해당 id 아이템 없는 경우
  // 삭제된 경우

  const key = url.includes("/") ? url.split("/")[1] : url.split("/")[0];

  if (key === "todo" && url.split("/").length === 3) {
    const toggleId = url.split("/")[2];
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
        };
      } else {
        return {
          msg: "토글할 수 있는 투두아이템이 없습니다",
        };
      }
    } else {
      return {
        msg: "투두 리스트가 존재하지 않습니다",
      };
    }
  } else {
    return { msg: "유효한 URL 요청이 아닙니다" };
  }
}
