import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TodoCreate } from "Components/todo/TodoCreate";

const Header: React.FC = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [date, setDate] = useState(
    new Date().toLocaleDateString(undefined, options),
  );

  useEffect(() => {
    function clock(): void {
      const time = new Date();

      setDate(time.toLocaleDateString(undefined, options));
    }

    const tickingClock = setInterval(clock, 1000 * 60);

    return () => {
      clearInterval(tickingClock);
    };
  }, []);

  return (
    <Wrapper>
      <StyledHeader>
        <h1 aria-label="현재 날짜">{date}</h1>
      </StyledHeader>
      <TodoCreate />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(233, 233, 233);
  z-index: 10;
`;

const StyledHeader = styled.header`
  /* height: 60px; */
  width: fit-content;
  color: black;
  font-size: 26px;
  font-weight: 500;
  margin: 16px 0;
`;
