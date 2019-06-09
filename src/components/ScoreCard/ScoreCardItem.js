import React, { Fragment } from "react";
import { Separator, Text } from "office-ui-fabric-react";

const ScoreCardItem = props => (
  <Fragment>
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-u-sm12">
        <Text variant="xLarge">{props.question}</Text>
      </div>
      <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: "0.2rem" }}>
        <Text variant="large" style={{ fontWeight: "600" }}>
          Your Answer:{" "}
        </Text>
        <Text variant="large">{props.answer}</Text>
      </div>
      {props.reason && (
        <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: "0.2rem" }}>
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
