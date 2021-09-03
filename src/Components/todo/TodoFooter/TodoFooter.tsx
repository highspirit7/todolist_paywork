import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "store/reducers";

const Todofooter: React.FC = () => {
  const state = useSelector((state: RootState) => state.todos);
  const [leftTasksNumber, setLeftTasksNumber] = useState(0);
  const [doneTasksNumber, setDoneTasksNumber] = useState(0);
  const { todoList } = state;

  useEffect(() => {
    if (todoList) {
      const leftTasks = state.todoList.filter((todoItem) => !todoItem.isCheck);

      setLeftTasksNumber(leftTasks.length);
      setDoneTasksNumber(todoList.length - leftTasksNumber);
    }
  }, [todoList]);

  return (
    <TodoFooterBlock>
      <Text>{leftTasksNumber} items left</Text>
      <Text>{doneTasksNumber} items done</Text>
    </TodoFooterBlock>
  );
};

export default React.memo(Todofooter);

const Text = styled.div`
  width: 50%;
  font-size: 18px;
  text-align: center;
`;

const TodoFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;

  ${Text}:first-child {
    color: ${({ theme }) => theme.colors.red};
  }

  ${Text}:last-child {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
