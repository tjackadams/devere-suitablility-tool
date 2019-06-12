import React, { Fragment } from "react";
import { Separator, Text } from "office-ui-fabric-react";
import classNames from "classnames/bind";

import styles from "./ScoreCardItem.module.css";

let cx = classNames.bind(styles);

let columnClass = cx({
  "ms-Grid-col": true,
  "ms-u-sm12": true
});

const ScoreCardItem = props => (
  <Fragment>
    <div className={styles["ms-Grid-row"]}>
      <div className={columnClass}>
        <Text variant="xLarge">{props.question}</Text>
      </div>
      <div className={columnClass} style={{ marginTop: "0.2rem" }}>
        <Text variant="large" style={{ fontWeight: "600" }}>
          Your Answer:{" "}
        </Text>
        <Text variant="large">{props.answer}</Text>
      </div>
      {props.reason && (
        <div className={columnClass} style={{ marginTop: "0.2rem" }}>
          <Text variant="mediumPlus" style={{ fontStyle: "italic" }}>
            {props.reason}
          </Text>
        </div>
      )}
    </div>
    <Separator />
  </Fragment>
);

export default ScoreCardItem;
