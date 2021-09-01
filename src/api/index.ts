import { ITodoItem, ITodoList } from "types";

interface Message {
  msg: string;
}

// count 없어지면서 ITodoList 필요한지 모르는 상황
// msg포함시켜 모든 api 리스폰스 타입 제작 필요
interface GetTodosResponse {
  todoList?: ITodoItem[];
  msg?: string;
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

    try {
      todos.todoList.push(todoItem);

      localStorage.setItem(key, JSON.stringify(todos));

      return { msg: "투두아이템이 생성되었습니다" };
    } catch (error) {
      console.log(error);
    }
  } else {
    return { msg: "유효한 URL 요청이 아닙니다" };
  }
}

export function getTodos(url: string): GetTodosResponse | undefined {
  const key = url.includes("/") ? url.split("/")[1] : url.split("/")[0];

  if (key === "todo" && url.split("/").length < 3) {
    try {
      return localStorage[key]
        ? JSON.parse(localStorage[key])
        : localStorage[key];
    } catch (error) {
      console.log(error);
    }
  } else {
    return { msg: "유효한 URL 요청이 아닙니다" };
  }
}
