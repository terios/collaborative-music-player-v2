import React from "react";
import styled from "styled-components";

import { Bubble } from "components";

const Wrapper = styled.div`height: 100%;`;

const BubblesList = props => {
  return (
    <Wrapper>
      {props.history.map((entry, index) => <Bubble key={index} data={entry} />)}
    </Wrapper>
  );
};

export default BubblesList;
