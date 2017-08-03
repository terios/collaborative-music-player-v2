import React from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import FontIcon from "material-ui/FontIcon";
import { blue900, grey50, red600 } from "material-ui/styles/colors";

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
  max-height: 220px;
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
  flex-direction: column;
  > div {
    margin-top: 20px;
  }
`;

const Auth = props => {
  return (
    <PaperWrapper zDepth={2}>
      <Wrapper>
        <TitleSection>
          <span>Start sharing :</span>
        </TitleSection>
        <Divider />
        <ActionSection>
          <RaisedButton
            backgroundColor={blue900}
            label="Facebook"
            fullWidth={true}
            labelColor={grey50}
            icon={<FontIcon className="socicon-facebook" />}
          />
          <RaisedButton
            backgroundColor={red600}
            label="Google"
            fullWidth={true}
            labelColor={grey50}
            icon={<FontIcon className="socicon-google" />}
          />
        </ActionSection>
      </Wrapper>
    </PaperWrapper>
  );
};

export default Auth;
