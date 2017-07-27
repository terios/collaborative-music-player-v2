import React from "react";
import styled from "styled-components";
import { grey300, grey900 } from "material-ui/styles/colors";

const ItemWrapper = styled.div`
  color: white;
  display: flex;
  border: 1px solid transparent;
  &:hover {
    transition: 0.25s;
    background-color: ${grey900};
  }
`;
const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;
`;

const VideoTitle = styled.div`
  color: white;
  font-size: 14px;
`;

const VideoSub = styled.div`
  color: ${grey300};
  font-size: 12px;
`;

const PlaylistItem = props => {
  this.getThumbnail = videoId => `http://img.youtube.com/vi/${videoId}/1.jpg`;

  return (
    <ItemWrapper className="videobox">
      <img src={this.getThumbnail(props.video.id)} />
      <VideoDetails>
        <VideoTitle>
          {props.video.title}
        </VideoTitle>
        <VideoSub>
          {props.video.owner}
        </VideoSub>
      </VideoDetails>
    </ItemWrapper>
  );
};

export default PlaylistItem;
