import React from "react";
import styled from "styled-components";
//import { cyan300 } from "material-ui/styles/colors";

const Wrapper = styled.div`height: 100%;`;

const Infos = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  height: 140px;
`;
const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid white;
  border-radius: 50%;
  background-image: url(https://s-media-cache-ak0.pinimg.com/originals/0a/e9/34/0ae9343c91bebf124fd96d044844fa4c.jpg);
  background-size: cover;
  filter: grayscale(${props => (props.status ? 0 : 1)});
`;

const BigNumber = styled.div`font-size: 20px;`;

const PlayerCard = props => {
  return (
    <Wrapper>
      <Infos>
        <Avatar status={props.status} />
        <div>
          {props.name || "unknown"}
          <BigNumber>
            {props.score}
          </BigNumber>
        </div>
      </Infos>
    </Wrapper>
  );
};

export default PlayerCard;
