import React, { memo } from "react";
import PropTypes from "prop-types";
import { Container, Header, Segment } from "semantic-ui-react";

const style = {
  container: {
    marginTop: "10vh"
  },
  header: {
    backgroundColor: "#003366"
  },
  title: {
    color: "#FFFFFF"
  }
};

const Layout = ({ title, subTitle, children }) => (
  <Container style={style.container}>
    <Segment.Group>
      <Segment style={style.header}>
        <Header
          as="h3"
          textAlign="center"
          style={style.title}
          content={title}
        />
      </Segment>
      {children}
    </Segment.Group>
  </Container>
);

Layout.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default memo(Layout);
