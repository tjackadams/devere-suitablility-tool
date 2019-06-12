import React from "react";
import { mergeStyleSets, Link, Stack } from "office-ui-fabric-react";

const styles = mergeStyleSets({
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(138, 136, 134)",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px",
    borderTop: 0
  }
});

const Footer = () => (
  <Stack.Item className={styles.item}>
    <Link
      href="https://www.devere-mortgages.co.uk/terms-of-use"
      target="_blank"
      rel="noopener noreferrer"
    >
      Terms of use
    </Link>
  </Stack.Item>
);

export default Footer;
