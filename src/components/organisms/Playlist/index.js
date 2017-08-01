import React from "react";
import styled from "styled-components";
import { List } from "material-ui/List";

import { PlaylistItem } from "components";

const PlaylistWrapper = styled.div`
  width: 30%;
  margin-top: 22px;
  overflow: scroll;
`;

const ListWrapper = styled(List)`padding: 0;`;

const Playlist = props => {
  return (
    <PlaylistWrapper>
      <ListWrapper>
        {props.playlist.map(entry =>
          <PlaylistItem
            key={entry.id}
            video={entry}
            selectVideo={props.selectVideo}
          />
        )}
      </ListWrapper>
    </PlaylistWrapper>
  );
};

export default Playlist;
