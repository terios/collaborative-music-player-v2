import React from "react";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

const Wrapper = styled(AppBar)`
  margin-bottom: 20px
`;

const Header = props => {
  return (
    <Wrapper
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<FlatButton label="Login" />}
    />
  );
};

export default Header;
