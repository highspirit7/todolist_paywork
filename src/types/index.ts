export interface ITodoItem {
  id: string;
  content: string;
  isCheck: boolean;
  updatedAt: Date;
  dueDate: string;
}

export interface ITodoList {
  todoList: ITodoItem[];
}

export interface ITodosResponse {
  todoList: ITodoItem[];
  msg: string;
}
