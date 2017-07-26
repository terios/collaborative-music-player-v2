import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Player = props => {
  console.log(props);
  return <ReactPlayer url={props.currentVideo.link} />;
};

export default Player;
