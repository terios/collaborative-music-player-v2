import React from "react";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

const Header = props => {
  return (
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<FlatButton label="Login" />}
    />
  );
};

export default Header;
