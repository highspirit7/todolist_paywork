import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
    <StyledHeader>
      <h1 aria-label="현재 날짜">{date}</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.32);
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(233, 233, 233);
  z-index: 10;
  color: black;
  font-size: 26px;
  font-weight: 500;
`;
