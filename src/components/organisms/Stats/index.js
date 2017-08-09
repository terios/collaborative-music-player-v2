import React from "react";
import styled from "styled-components";
import {cyan300} from "material-ui/styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ScoreBanner = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Score = styled.div`
  color: white;
  font-size: 30px;
`;

const Bet = styled.div`
  font-size: 60px;
  color: black;
  line-height: 120px;
  display: block;
  width: 120px;
  height: 120px;
  background-color: white;
  border: 4px solid ${cyan300};
  border-radius: 50%;
  text-align: center;
`;

const Stats = props => {
  return (
    <Wrapper>
      <ScoreBanner>
        <Score>0</Score>
        <div>
          <h1>Division Game</h1>
        </div>
        <Score>1</Score>
      </ScoreBanner>
      <Bet>
        30
      </Bet>
    </Wrapper>
  );
};

export default Stats;
