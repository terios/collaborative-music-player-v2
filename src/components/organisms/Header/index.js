import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

const Wrapper = styled(AppBar)`
  margin-bottom: 20px;
`;

const Header = props => {
  return (
    <Wrapper
      title="Title"
      iconElementRight={
        <FlatButton containerElement={<Link to="/auth" />} label="Login" />
      }
    />
  );
};

export default Header;
