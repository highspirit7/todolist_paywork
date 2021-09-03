import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { TodoItem } from "Components/todo/TodoItem";
import { RootState } from "store/reducers";
import { getTodosRequest } from "store/actions/todos";

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(getTodosRequest());
  }, [dispatch]);

  const { todoList } = state;

  useEffect(() => {
    if (todoList) {
      todoList.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
      );
    }
  }, [todoList]);

  return (
    <TodoListBlock>
      {todoList &&
        todoList.map((todo) => (
          // todoItem 내부 isCheck 값이 바뀌어도 key 값이 그대로라 변경된
          // 부분이 바로 렌더되지 않았어서 key 값을 아래와 같이 조정.
          <TodoItem key={todo.id + todo.isCheck} todo={todo} />
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
