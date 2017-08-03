import React from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import { blue900 } from "material-ui/styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
`;

const PaperWrapper = styled(Paper)`
  width: 30%;
  max-width: 400px;
  padding: 20px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  font-size: 24px;
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: white;
`;

const Auth = props => {
  return (
    <PaperWrapper zDepth={2}>
      <Wrapper>
        <TitleSection>
          <span>Start sharing </span>
        </TitleSection>
        <Divider />
        <ActionSection>
          <RaisedButton
            backgroundColor={blue900}
            label="Primary"
            fullWidth={true}
          />
        </ActionSection>
      </Wrapper>
    </PaperWrapper>
  );
};

export default Auth;
