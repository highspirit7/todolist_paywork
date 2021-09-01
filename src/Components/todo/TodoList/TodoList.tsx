import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TodoItem } from "Components/todo/TodoItem";
import { getTodos } from "api";
import { ITodoItem } from "types";

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const todos = getTodos("/todo");
    // console.log(todos);

    if (todos && todos.todoList) {
      if (todos.todoList.length > 0) {
        todos.todoList.sort(
          (a, b) =>
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
        );
        setTodoList(todos.todoList);
      }
    }
  }, []);

  return (
    <TodoListBlock>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
