import React from "react";
import styled from "styled-components";

import { Header } from "Components/Header";
import TodoSection from "Components/todo/TodoSection";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <TodoSection />
      </Main>
    </>
  );
};
export default Home;

const Main = styled.main`
  min-height: 100vh;
  padding-top: 120px;
`;

// const Section = styled.section`
//   width: 100%;
//   max-width: 1200px;
//   padding: 12px 0;
//   margin: 0 auto;
// `;
