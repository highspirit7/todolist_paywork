import React from "react";
import styled from "styled-components";

const Todofooter: React.FC = () => {
  // const undoneTasks = todos.filter((todo) => !todo.done);
  return (
    <TodoFooterBlock>
      <Text>1 items left</Text>
      <Text>2 items done</Text>
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
