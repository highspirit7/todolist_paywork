import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { warning } from "utils/modals";
import { createTodoItem } from "api";
import { ITodoItem } from "types";

// interface ITodoCreateProps {
//   createTodo: (text: string, date: string) => void;
// }

const TodoCreate: React.FC = () => {
  const [value, setValue] = useState("");
  const [dateString, setDateString] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dateMoment, setDateMoment] = useState<any>(null);

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const yesterdayDate = moment().subtract(1, "days");

    e.preventDefault(); // 새로고침 방지

    if (!value) {
      const warningData = {
        title: "Warning",
        content: "투두 아이템 내용을 입력해주세요",
      };

      warning(warningData);
    } else if (!dateString) {
      const warningData = {
        title: "Warning",
        content: "완료 목표일 설정이 필요합니다",
      };

      warning(warningData);
    } else if (dateString && !yesterdayDate.isBefore(dateString)) {
      const warningData = {
        title: "Warning",
        content: "오늘보다 이전 날짜를 완료 목표일로 입력할 수 없습니다",
      };

      warning(warningData);
    } else {
      const todoItem: ITodoItem = {
        id: uuidv4(),
        content: value,
        isCheck: false,
        updatedAt: new Date(),
        dueDate: dateString,
      };

      console.log(createTodoItem(todoItem, "/todo"));

      setValue(""); // input 초기화
      setDateString(""); // dateString 초기화
      setDateMoment(null); // DatePicker 컴포넌트 value 초기화
    }
  };

  const handleChangeDate = (date: moment.Moment | null, dateString: string) => {
    setDateString(dateString);
    setDateMoment(date);
  };

  return (
    <>
      <InsertForm onSubmit={handleSubmit} ref={formRef}>
        <DateWrapper>
          <DatePicker
            onChange={handleChangeDate}
            size="large"
            id="date"
            name="date"
            value={dateMoment}
          />
        </DateWrapper>

        <InputWrapper>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChangeInput}
            value={value}
            id="input"
            name="input"
          />
          <CircleButton>
            <PlusCircleOutlined />
          </CircleButton>
        </InputWrapper>
      </InsertForm>
    </>
  );
};

const DateWrapper = styled.div`
  margin: 0 16px;
`;

const InputWrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CircleButton = styled.button`
  background: ${({ theme }) => theme.colors.green};
  width: 40px;
  height: 40px;
  font-size: 42px;
  left: 100%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InsertForm = styled.form`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

export default React.memo(TodoCreate);
