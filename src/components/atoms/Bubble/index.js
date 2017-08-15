import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50px;
  color: black;
  border: 3px solid black;
  min-width: 300px;
  background-color: white;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  height: 100%;
  padding: 15px;
  text-align: center;
`;

const Bubble = props => {
  return (
    <Wrapper>
      <TextContainer>
        {props.data.bet} {props.data.action} = {props.data.result}
      </TextContainer>
    </Wrapper>
  );
};

export default Bubble;
