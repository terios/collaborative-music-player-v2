import React from 'react';

import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Thumbnail} from 'components'

const Wrapper = styled.div `
  display: flex;
`

const Playlist = ({
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {props.videos.map(entry =>
        <Thumbnail key={entry.id} video={entry} getThumbnail={props.getThumbnail} selectVideo={props.selectVideo}/>
      )}
    </Wrapper>
  )
}

Playlist.propTypes = {}

export default Playlist
