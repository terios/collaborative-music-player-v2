import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { Player, Playlist } from "components";
import { selectVideo } from "store/actions";
import ResizeDetector from "react-resize-detector";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
`;

class StageContainer extends React.Component {
  //const StageContainer = props => {

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
      <Wrapper style={{ height: this.state.ratioHeigth }}>
        <ResizeDetector handleWidth onResize={this.onResize} />
        <Player
          {...this.props}
          w={this.state.width}
          r={this.state.ratioHeigth}
        />
        <Playlist {...this.props} r={this.state.ratioHeigth} />
      </Wrapper>
    );
  }
}

StageContainer.propTypes = {
  currentVideo: PropTypes.object
};

const mapStateToProps = state => ({
  currentVideo: state.stage.currentVideo,
  playlist: state.stage.currentPlaylist
});

const mapDispatchToProps = dispatch => ({
  selectVideo: video => dispatch(selectVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(StageContainer);
