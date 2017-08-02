import React from "react";
import styled from "styled-components";

import { PageTemplate, Header } from "components";
import { Stage } from "containers";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
`;

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Wrapper>
        <Stage />
      </Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
