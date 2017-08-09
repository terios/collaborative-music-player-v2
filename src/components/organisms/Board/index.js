import React from "react";
import styled from "styled-components";
import { cyan300 } from "material-ui/styles/colors";

import { PlayerCard } from "components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const Board = props => {
  return (
    <Wrapper>
      <PlayerCard />
      <PlayerCard />
    </Wrapper>
  );
};

export default Board;
