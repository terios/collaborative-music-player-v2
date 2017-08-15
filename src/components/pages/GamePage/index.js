import React from "react";
import styled from "styled-components";

import { GenericTemplate } from "components";

import { Stats, Board } from "containers";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

const GamePage = () => {
  return (
    <GenericTemplate>
      <Wrapper>
        <Stats />
        <Board />
      </Wrapper>
    </GenericTemplate>
  );
};

export default GamePage;
