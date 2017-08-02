import React from "react";
import styled from "styled-components";
import { List } from "material-ui/List";
import PropTypes from "prop-types";
import FlatButton from "material-ui/FlatButton";
import { grey300 } from "material-ui/styles/colors";

import { PlaylistItem } from "components";

const PlaylistWrapper = styled.div`
  width: 30%;
  margin-top: 22px;
`;

const ListWrapper = styled(
  List
)`padding: 0px 8px 0px 0px !important; height:80%;overflow: scroll;`;
const ContributeSection = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
`;

const Playlist = props => {
  return (
    <PlaylistWrapper style={{ height: props.r }}>
      <ListWrapper>
        {props.playlist.map(entry =>
          <PlaylistItem
            key={entry.id}
            video={entry}
            selectVideo={props.selectVideo}
          />
        )}
      </ListWrapper>
      <ContributeSection>
        <FlatButton
          label="Add your video"
          backgroundColor={grey300}
          fullWidth={true}
        />
      </ContributeSection>
    </PlaylistWrapper>
  );
};

Playlist.propTypes = {
  r: PropTypes.number
};

export default Playlist;
