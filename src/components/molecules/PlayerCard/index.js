import React from "react";
import styled from "styled-components";
//import { cyan300 } from "material-ui/styles/colors";

const Wrapper = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 120px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid white;
  border-radius: 50%;
  background-image: url(https://s-media-cache-ak0.pinimg.com/originals/0a/e9/34/0ae9343c91bebf124fd96d044844fa4c.jpg);
  background-size: cover;
`;

const PlayerCard = props => {
  return (
    <Wrapper>
      <Avatar></Avatar>
      Player one
    </Wrapper>
  );
};

export default PlayerCard;
