import React from "react";
import { Container, Segment } from "semantic-ui-react";

const Footer = () => (
  <Container text textAlign="center">
    <Segment.Group>
      <Segment vertical>
        <a href="https://www.devere-mortgages.co.uk/terms-of-use">
          Terms of use
        </a>
      </Segment>
    </Segment.Group>
  </Container>
);

export default Footer;