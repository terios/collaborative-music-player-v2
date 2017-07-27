import React from "react";
import styled from "styled-components";
import { List } from "material-ui/List";

import { PlaylistItem } from "components";

const PlaylistWrapper = styled.div`
  width: 30%;
  padding-top: 22px;
  max-height: 390px;
  overflow: scroll;
`;

const ListWrapper = styled(List)`padding: 0;`;

const Playlist = props => {
  console.log(props);
  return (
    <PlaylistWrapper>
      <ListWrapper>
        {props.playlist.map(entry =>
          <PlaylistItem key={entry.id} video={entry} />
        )}
      </ListWrapper>
    </PlaylistWrapper>
  );
};

export default Playlist;
