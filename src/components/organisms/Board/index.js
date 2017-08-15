import React from "react";
import styled from "styled-components";
import { cyan300 } from "material-ui/styles/colors";

import { BubblesList, InputSection } from "components";

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  min-height: 200px;
  padding-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const Board = props => {
  return (
    <Wrapper>
      <TopSection>
        <BubblesList history={props.history} />
      </TopSection>
      <InputSection bet={props.currentNumber} send={props.sendResult} />
    </Wrapper>
  );
};

export default Board;
