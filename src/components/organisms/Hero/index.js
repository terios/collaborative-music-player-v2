import React from 'react';

import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block
} from 'components'

import {
  Playlist,
  Player
} from 'containers'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: 500px;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  &:first-child {
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const PlaylistSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  &:first-child {
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`
const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>

        <Section>
          <Player/>
        </Section>

        <PlaylistSection>
          <Playlist/>
        </PlaylistSection>



      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
