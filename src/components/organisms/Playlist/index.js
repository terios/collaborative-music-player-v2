import React from "react";
import styled from "styled-components";
import { List } from "material-ui/List";
import PropTypes from "prop-types";
import FlatButton from "material-ui/FlatButton";
import { grey300, grey400 } from "material-ui/styles/colors";

import { PlaylistItem } from "components";

const PlaylistWrapper = styled.div`
  width: 30%;
  margin-top: 22px;
`;

const ListWrapper = styled(
  List
)`padding: 0px 8px 0px 0px !important; height:80%;overflow: scroll;`;

const NavigationBtn = styled(FlatButton)`width:45%; min-width:150px`;

const ContributeSection = styled.div`
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Playlist = props => {
  return (
    <PlaylistWrapper style={{ height: props.r }}>
      <ListWrapper>
        {props.playlist.map((entry, index) =>
          <PlaylistItem
            key={index}
            videoIndex={index}
            video={entry}
            selectVideo={props.selectVideo}
          />
        )}
      </ListWrapper>
      <ContributeSection>
        <NavigationBtn
          label="Previous"
          backgroundColor={grey300}
          hoverColor={grey400}
          onTouchTap={props.previousVideo}
          disabled={props.videoIndex == 0}
        />
        <NavigationBtn
          label="Next"
          backgroundColor={grey300}
          hoverColor={grey400}
          onTouchTap={props.nextVideo}
          disabled={props.videoIndex == props.playlistSize - 1}
        />
      </ContributeSection>
    </PlaylistWrapper>
  );
};

Playlist.propTypes = {
  r: PropTypes.number
};

export default Playlist;
