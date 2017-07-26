import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.header``;
const PageTemplate = ({ header, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>
        {header}
      </Header>
      {children}
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
};

export default PageTemplate;
