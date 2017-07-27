import React from "react";
import styled from "styled-components";

import { PageTemplate, Header } from "components";
import { Player, Playlist } from "containers";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
`;

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Wrapper>
        <Player />
        <Playlist />
      </Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
