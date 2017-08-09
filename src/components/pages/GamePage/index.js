import React from "react";
import styled from "styled-components";

import { GenericTemplate, Stats, Board } from "components";

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
        <Stats></Stats>
        <Board></Board>
      </Wrapper>
    </GenericTemplate>
  );
};

export default GamePage;
