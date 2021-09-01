import React, { useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment";

import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { ITodoItem } from "types";
import { removeTodoItem, toggleTodoItem } from "api";

interface ITodoItemProps {
  todo: ITodoItem;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  const { id, content, isCheck, dueDate } = todo;
  const now = new Date();
  const dDay = Math.abs(
    moment([now.getFullYear(), now.getMonth(), now.getDate()]).diff(
      moment(dueDate),
      "days",
    ),
  );

  return (
    <>
      <TodoItemBlock>
        <CheckCircle
          done={isCheck}
          onClick={() => {
            console.log(toggleTodoItem(`/todo/${id}`));
          }}
        >
          {isCheck && <CheckOutlined />}
        </CheckCircle>
        <Text done={isCheck}>{content}</Text>
        <Dday done={isCheck}>{`D-${dDay}`}</Dday>
        <RemoveButton
          done={isCheck}
          onClick={() => {
            console.log(removeTodoItem(`/todo/${id}`));
          }}
        >
          <DeleteOutlined />
        </RemoveButton>
      </TodoItemBlock>
    </>
  );
};

const RemoveButton = styled.button<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.green};
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${RemoveButton} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  /* cursor: pointer; */
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Dday = styled.div<{ done: boolean }>`
  margin-right: 16px;
  font-size: 14px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default React.memo(TodoItem);
