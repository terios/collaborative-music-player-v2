import React from "react";
import styled from "styled-components";

import { PageTemplate, Header, Auth } from "components";
import { Stage } from "containers";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const AuthPage = () => {
  return (
    <PageTemplate header={<Header />}>
      <Wrapper>
        <Auth />
      </Wrapper>
    </PageTemplate>
  );
};

export default AuthPage;
