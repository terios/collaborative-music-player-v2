import React from 'react';
import Youtube from 'react-youtube';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div `
  .videoPlayer{
      padding: 10px;
  }
`
const Player = ({
  ...props
}) => {

  console.log(props);
  return (
    <Wrapper {...props}>
      <Youtube videoId={props.video.id} opts={props.playerConfig()}/>
    </Wrapper>
  )
}

Player.propTypes = {}

export default Player
