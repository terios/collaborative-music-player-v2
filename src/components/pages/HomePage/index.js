import React from "react";
import styled from "styled-components";

import { PageTemplate, Header } from "components";
import { Player } from "containers";

const Wrapper = styled.div`background-color: black;`;

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Wrapper>
        <Player />
      </Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
