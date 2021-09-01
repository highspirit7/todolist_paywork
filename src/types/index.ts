export interface ITodoItem {
  id: string;
  content: string;
  isCheck: boolean;
  updatedAt: Date;
  dueDate: string;
}

// export type Count = number;

export interface ITodoList {
  todoList: ITodoItem[];
}
