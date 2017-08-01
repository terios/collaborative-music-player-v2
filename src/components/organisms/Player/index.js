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
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || "600px",
      height: props.height || "600px"
    };

    this.onResize = this.onResize.bind(this);
  }

  onResize(w, h) {
    this.setState({
      width: w,
      height: h,
      ratioHeigth: w / 1.77916667
    });
  }
  render() {
    return (
      <VideoWrapper className="lolo">
        <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
        <ReactPlayer
          url={this.props.currentVideo.link}
          width="100%"
          height={this.state.ratioHeigth}
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
  header: PropTypes.string,
  children: PropTypes.string
};
export default Player;
