import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { mergeStyleSets, DefaultPalette, Stack } from "office-ui-fabric-react";

import ScoreCardItem from "./ScoreCardItem";

import msStyles from "./ScoreCard.module.css";

const styles = mergeStyleSets({
  container: {
    width: "100%"
  },

  stackContainer: {
    width: "100%",
    marginTop: "8vh"
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  titleItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(138, 136, 134)"
  },

  contentItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(138, 136, 134)",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px"
  },

  title: {
    color: DefaultPalette.white
  }
});

const ScoreCard = props => {
  return (
    <Fragment>
      <div style={{ height: "20px" }}> </div>
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        className={styles.container}
      >
        <Stack
          className={styles.stackContainer}
          tokens={{ maxWidth: 960, padding: 10 }}
        >
          <Stack.Item className={styles.titleItem}>{props.header}</Stack.Item>
          <Stack.Item className={styles.contentItem}>
            <div className={msStyles["ms-Grid"]}>
              {props.results.map(r => (
                <ScoreCardItem
                  key={r.id}
                  question={r.question}
                  answer={r.answer}
                  reason={r.reason}
                />
              ))}
            </div>
          </Stack.Item>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default ScoreCard;
