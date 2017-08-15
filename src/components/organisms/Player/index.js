import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import styled from "styled-components";
import ResizeDetector from "react-resize-detector";
import { grey300, grey100 } from "material-ui/styles/colors";

const VideoWrapper = styled.div`
  width: 60%;
  max-width: 850px;
  padding: 30px;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    padding: 0;
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

class Player extends React.Component {
  render() {
    return (
      <VideoWrapper>
        <ReactPlayer
          url={this.props.currentVideo.id}
          width="100%"
          height={this.props.r}
          controls={true}
        />
        <VideoDescription>
          <Title>
            {this.props.currentVideo.title}
          </Title>
          <Owner>
            {this.props.currentVideo.owner}
          </Owner>
        </VideoDescription>
      </VideoWrapper>
    );
  }
}

Player.propTypes = {
  children: PropTypes.string
};
export default Player;
