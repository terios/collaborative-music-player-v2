import React from 'react';

import PropTypes from 'prop-types'
import styled from 'styled-components'

const VideoThumbnail = styled.div `
  &.videobox{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 10px;
    &:hover {
      transition: 0.25s;
      border: 1px solid #691414;
    }
    .title {
        color: white;
        font-size: 14px;
      }

      .owner {
        color: #a0a0a0;
        font-size: 12px;
      }
  }
`

const Thumbnail = ({
  ...props
}) => {
  return (
    <VideoThumbnail className="videobox" onClick={() => props.selectVideo(props.video)}>
      <img src={props.getThumbnail(props.video.id)}/>
      <div className="videoDetails">
        <span className="title">{props.video.title}</span>
        <span className="owner">{props.video.owner}</span>
      </div>
    </VideoThumbnail>
  )
}

Thumbnail.propTypes = {}

export default Thumbnail
