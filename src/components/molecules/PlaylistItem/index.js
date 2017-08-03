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
  this.getThumbnail = video => {
    let thumbnail = "";
    switch (video.origin) {
      case "youtube":
        let id;
        if (video.id.indexOf("=") > 0 && video.id.indexOf("&") > 0) {
          id = video.id.substring(
            video.id.indexOf("=") + 1,
            video.id.indexOf("&")
          );
        } else if (video.id.indexOf("=") > 0) {
          id = video.id.substring(video.id.indexOf("=") + 1, video.id.length);
        }
        thumbnail = `http://img.youtube.com/vi/${id}/1.jpg`;
    }
    return thumbnail;
  };

  return (
    <ItemWrapper
      className="videobox"
      onClick={() => props.selectVideo(props.videoIndex)}
    >
      <img src={this.getThumbnail(props.video)} />
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
