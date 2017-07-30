import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
// import ReactResizeDetector from "react-resize-detector";
import { grey300, grey100 } from "material-ui/styles/colors";

const VideoWrapper = styled.div`
  width: 70%;
  max-width: 850px;
  padding: 30px;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`;

const VideoDescription = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
`;

const Owner = styled.div`
  color: ${grey300};
  font-size: 20px;
`;
// ratio = 1.77916667
const Player = props => {
  return (
    <VideoWrapper>
      <ReactPlayer
        url={props.currentVideo.link}
        width="100%"
        height="100%"
        controls={true}
      />
      <VideoDescription>
        <Title>
          {props.currentVideo.title}
        </Title>
        <Owner>
          {props.currentVideo.owner}
        </Owner>
      </VideoDescription>
    </VideoWrapper>
  );
};

export default Player;
