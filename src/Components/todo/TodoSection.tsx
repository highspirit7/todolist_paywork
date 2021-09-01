import React from "react";
import styled from "styled-components";

import { TodoList } from "Components/todo/TodoList";
import { TodoFooter } from "Components/todo/TodoFooter";

const TodoSection: React.FC = () => {
  return (
    <StyledTodoList>
      <TodoList />
      <TodoFooter />
    </StyledTodoList>
  );
};

export default TodoSection;

const StyledTodoList = styled.section`
  width: 70%;
  min-height: 400px;
  min-width: 360px;
  max-width: 700px;
  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
