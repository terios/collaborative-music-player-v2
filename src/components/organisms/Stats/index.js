import React from "react";
import styled from "styled-components";
import { cyan300 } from "material-ui/styles/colors";

import { PlayerCard } from "components";

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
  margin-top: -60px;
`;

const Stats = props => {
  console.log(props);
  return (
    <Wrapper>
      <ScoreBanner>
        <Score>
          <PlayerCard
            name={props.player1.name}
            score={props.player1.score || 0}
            status={props.player1.ready || false}
          />
        </Score>
        <div>
          <h1>Division Game</h1>
        </div>
        <Score>
          <PlayerCard
            name={props.player2.name}
            score={props.player2.score || 0}
            status={props.player2.ready || false}
          />
        </Score>
      </ScoreBanner>
      <Bet>
        {props.bet}
      </Bet>
    </Wrapper>
  );
};

export default Stats;
