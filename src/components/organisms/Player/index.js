import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoWrapper = styled.div`
  width: 70%;
  max-width: 750px;
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Player = props => {
  return (
    <VideoWrapper>
      <ReactPlayer url={props.currentVideo.link} width="100%" controls={true} />
    </VideoWrapper>
  );
};

export default Player;
